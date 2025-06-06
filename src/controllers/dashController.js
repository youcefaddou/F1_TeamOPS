exports.getDashboard = (req, res) => {
    if (!req.session.team) {
        return res.redirect('/login'); 
    }
    res.render('./pages/dashboard.twig', { team: req.session.team }); 
};