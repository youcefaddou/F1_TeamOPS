const { PrismaClient } = require('../../prismaclient');
const hashPasswordExtension = require('../services/extensions/hashPasswordExtension');
const prisma = new PrismaClient({}).$extends(hashPasswordExtension);
const bcrypt = require('bcrypt');


exports.getRegister = async (req, res) => {
    res.render('./pages/register.twig', { error: {} });
}

exports.postRegister = async (req, res) => {
    try {
        if (req.body.password === req.body.confirmPassword) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const team = await prisma.team.create({
                data: {
                    name: req.body.name,
                    country: req.body.country,
                    director: req.body.director,
                    email: req.body.email,
                    password: hashedPassword
                }
            });
            res.redirect('/login');
        } else {
            throw { confirmPassword: 'Les mots de passe ne correspondent pas' };
        }
    } catch (error) {
        if (error.code === 'P2002') {
            error = { email: 'Cet email est déjà utilisé' };
        }
        res.render('pages/register.twig', { error });
    }
};
exports.getLogin = async (req, res) => {
    res.render('pages/login.twig', { error: {} });
}

exports.postLogin = async (req, res) => {
    try {
        const team = await prisma.team.findUnique({
            where: {
                email: req.body.email
            }
        });
        if (team) {
            if (await bcrypt.compare(req.body.password, team.password)) {
                req.session.team = team; 
                res.redirect('/dashboard'); 
            } else {
                res.render('pages/login.twig', { error: { password: 'Mot de passe incorrect' } });
            }
        } else {
            res.render('pages/login.twig', { error: { email: 'Email non trouvé' } });
        }
    } catch (error) {
        res.render('pages/login.twig', { error: 'Une erreur est survenue. Réessayez.' });
    }
}
exports.getLogout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erreur lors de la déconnexion');
        }
        res.redirect('/login');
    });
};

exports.getMembers = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login'); 
        }
        const members = await prisma.member.findMany({
            where: {
                teamId: req.session.team.id
            }
        });
        res.render('pages/members.twig', { members, team: req.session.team });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
}

exports.postMembers = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.role) {
            const members = await prisma.member.findMany({ where: { teamId: req.session.team.id } });
            return res.render('pages/members.twig', {
                members,
                team: req.session.team,
                error: { form: "Tous les champs obligatoires doivent être remplis." }
            });
        }

        const hashedMemberPassword = await bcrypt.hash(req.body.password, 10);

        //gestion de l'avatar
        let avatarUrl = null;
        if (req.file) {
            avatarUrl = '/uploads/avatars/' + req.file.filename;
        }

        await prisma.member.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedMemberPassword,
                role: req.body.role,
                nationality: req.body.nationality || null,
                age: req.body.age ? parseInt(req.body.age) : null,
                avatarUrl: avatarUrl,
                teamId: req.session.team.id
            }
        });
        res.redirect('/members');
    } catch (error) {
        let errorMsg = {};
        if (error.code === 'P2002') {
            errorMsg = { email: 'Cet email est déjà utilisé' };
        } else {
            errorMsg = { form: "Erreur lors de l'ajout du membre" };
        }
        const members = await prisma.member.findMany({ where: { teamId: req.session.team.id } });
        res.render('pages/members.twig', {
            members,
            team: req.session.team,
            error: errorMsg
        });
    }
};

exports.getEditMember = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        const member = await prisma.member.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!member || member.teamId !== req.session.team.id) {
            return res.redirect('/members');
        }
        res.render('pages/editMember.twig', { member });
    } catch (error) {
        console.error(error);
        res.redirect('/members');
    }
};

exports.postEditMember = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        const memberId = parseInt(req.params.id);
        const member = await prisma.member.findUnique({
            where: { id: memberId }
        });
        if (!member || member.teamId !== req.session.team.id) {
            return res.redirect('/members');
        }
        // Gestion de l'avatar
        let avatarUrl = member.avatarUrl;
        if (req.file) {
            avatarUrl = '/uploads/avatars/' + req.file.filename;
        }
        await prisma.member.update({
            where: { id: memberId },
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                role: req.body.role,
                nationality: req.body.nationality || null,
                age: req.body.age ? parseInt(req.body.age) : null,
                avatarUrl: avatarUrl
            }
        });
        res.redirect('/members');
    } catch (error) {
        console.error(error);
        // On réaffiche la page d'édition avec les infos du membre
        const member = await prisma.member.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        res.render('pages/editMember.twig', { member, error: 'Erreur lors de la mise à jour' });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        const memberId = parseInt(req.params.id);
        const member = await prisma.member.findUnique({
            where: { id: memberId }
        });
        // Correction : vérifie bien l'appartenance à l'équipe
        if (!member || member.teamId !== req.session.team.id) {
            return res.redirect('/members');
        }
        await prisma.member.delete({
            where: { id: memberId }
        });
        res.redirect('/members');
    } catch (error) {
        console.error(error);
        res.redirect('/members');
    }
}