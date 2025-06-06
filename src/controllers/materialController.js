const { PrismaClient } = require('../../prismaclient');
const prisma = new PrismaClient();

exports.getMaterials = (req, res) => {
    res.render('pages/material.twig');
};
exports.getCar = async (req, res) => {
    if (!req.session.team) return res.redirect('/login');
    const pilots = await prisma.member.findMany({
        where: {
            teamId: req.session.team.id,
            role: 'PILOT'
        }
    });
    const cars = await prisma.car.findMany({
        where: { teamId: req.session.team.id },
        include: { pilot: true }
    });
    res.render('pages/car.twig', { team: req.session.team, cars, pilots });
};

exports.postCar = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }

        await prisma.car.create({
            data: {
                chassisNum: req.body.chassisNum,
                model: req.body.model,
                teamId: req.session.team.id,
                pilotId: parseInt(req.body.pilotId, 10)
            }
        });
        return res.redirect('/materials/car');
    } catch (error) {
        let errorMsg = { form: "Erreur lors de l'ajout de la voiture" };
        // On récupère aussi la liste des pilotes pour le modal
        const pilots = await prisma.member.findMany({
            where: {
                teamId: req.session.team.id,
                role: 'PILOT'
            }
        });
        const cars = await prisma.car.findMany({
            where: { teamId: req.session.team.id },
            include: { pilot: true }
        });
        return res.render('pages/car.twig', {
            cars,
            team: req.session.team,
            pilots,
            error: errorMsg
        });
    }
}

exports.editCar = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        const carId = parseInt(req.body.carId, 10);
        await prisma.car.update({
            where: { id: carId, teamId: req.session.team.id },
            data: {
                chassisNum: req.body.chassisNum,
                model: req.body.model,
                pilotId: parseInt(req.body.pilotId, 10)
            }
        });
        return res.redirect('/materials/car');
    } catch (error) {
        let errorMsg = { form: "Erreur lors de la modification de la voiture" };
        const pilots = await prisma.member.findMany({
            where: {
                teamId: req.session.team.id,
                role: 'PILOT'
            }
        });
        const cars = await prisma.car.findMany({
            where: { teamId: req.session.team.id },
            include: { pilot: true }
        });
        return res.render('pages/car.twig', {
            cars,
            team: req.session.team,
            pilots,
            error: errorMsg
        });
    }
}

exports.deleteCar = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login');
        }
        const carId = parseInt(req.body.carId, 10);
        await prisma.car.delete({
            where: { id: carId, teamId: req.session.team.id }
        });
        return res.redirect('/materials/car');
    } catch (error) {
        let errorMsg = { form: "Erreur lors de la suppression de la voiture" };
        const pilots = await prisma.member.findMany({
            where: {
                teamId: req.session.team.id,
                role: 'PILOT'
            }
        });
        const cars = await prisma.car.findMany({
            where: { teamId: req.session.team.id },
            include: { pilot: true }
        });
        return res.render('pages/car.twig', {
            cars,
            team: req.session.team,
            pilots,
            error: errorMsg
        });
    }
}
