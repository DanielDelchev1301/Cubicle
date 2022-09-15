const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    let createdUser = await authService.register(username, password, repeatPassword);
    
    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        res.render('404');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;