const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import session middleware
const app = express();
const teamRoutes = require('./src/routes/teamRoutes'); 
const dashRoutes = require('./src/routes/dashRoutes');
const materialRoutes = require('./src/routes/materialRoutes');
dotenv.config();

app.set('views', './src/views')
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        sameSite: 'lax'
    }
}));

app.use((req, res, next) => {
    res.locals.team = req.session.team || null;
    next();
});

app.use(teamRoutes)
app.use('/', dashRoutes)
app.use(materialRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${process.env.PORT}`);
});

