const { PrismaClient } = require('../../prismaclient'); 

const prisma = new PrismaClient();
const authguard = async (req, res, next) => {
    try {
        if (req.session.team) {
            const team = await prisma.team.findUnique({
                where: {
                    email: req.session.team.email // Ensure email matches session team
                }
            });
            if (team) {
                req.team = team; // Attach team to request for further use
                return next();
            }
        }
        throw new Error('Directeur non connecté');
    } catch (error) {
        console.error('Authguard error:', error); // Debug log
        res.redirect('/login'); // Redirect to login if not authenticated
    }
};
module.exports = authguard