const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    const createdUser = await authService.register(username, password, repeatPassword);
    
    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        res.render('404');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const isCorrect = await authService.login(username, password);
    
    if (isCorrect) {
        console.log(`Welcome ${username}!`);
        res.redirect('/');
    } else {
        res.render('404');
    }
});

module.exports = router;