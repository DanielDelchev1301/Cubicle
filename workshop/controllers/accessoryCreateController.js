const Accessory = require('../models/Accessory');

exports.index = async (req, res) => {
    await Accessory.create(req.body);
    res.redirect('/');
};