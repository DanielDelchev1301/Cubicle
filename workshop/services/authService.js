const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secret = 'sidj289hdw78hs81w7hd178sh97wh719';

exports.register = async (username, password, repeatPassword) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return User.create({
        username,
        password: hashedPassword
    });
}

exports.login = async (username, password) => {
    const user = await User.findOne({username});
    const hashedPassword = user.password;
    const isCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isCorrect) {
        return;
    }

    const token = new Promise((resolve, reject) => {
        jwt.sign({_id: user._id, username}, secret, {expiresIn: '7d'}, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });

    return token;
}