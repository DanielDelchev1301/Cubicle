const Accessory = require('../models/Accessory');

exports.getAllAvailable = (ids) => {
    return Accessory.find({_id: {$nin: ids}});
}

exports.createAccessory = (accessoryData) => {
    return Accessory.create(accessoryData);
}