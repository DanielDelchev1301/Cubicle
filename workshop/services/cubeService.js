const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getCube = (id) => {
    return Cube.findById(id).lean();
};

exports.getAll = () => {
    return Cube.find().lean();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

}