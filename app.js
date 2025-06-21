const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import session middleware
const app = express();
const teamRoutes = require('./src/routes/teamRoutes'); 
const dashRoutes = require('./src/routes/dashRoutes');
const materialRoutes = require('./src/routes/materialRoutes');

dotenv.config();

app.set('view engine', 'twig');
app.set('views', './src/views')
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true })); // Middleware pour parser les données du formulaire

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24, // 1 jour
        httpOnly: true // Pour éviter les attaques XSS
    }
}));

app.use((req, res, next) => {
    res.locals.team = req.session.team || null;
    next();
});

app.use(teamRoutes)
app.use(dashRoutes)
app.use(materialRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${process.env.PORT}`);
});

