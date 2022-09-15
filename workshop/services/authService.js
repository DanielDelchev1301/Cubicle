const bcrypt = require('bcrypt');
const User = require('../models/User');

const saltRounds = 10;

exports.register = async (username, password, repeatPassword) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return User.create({
        username,
        password: hashedPassword
    });
}

exports.login = async (username, password) => {
    const user = await User.find({username});
    const hashedPassword = user[0].password;
    const isCorrect = await bcrypt.compare(password, hashedPassword);
    return isCorrect;
}