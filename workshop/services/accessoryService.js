const Accessory = require('../models/Accessory');

exports.getAll = () => {
    return Accessory.find().lean();
}

exports.createAccessory = (accessoryData) => {
    return Accessory.create(accessoryData);
}