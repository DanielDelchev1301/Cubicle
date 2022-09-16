const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getCubePopulated = (id) => {
    return Cube.findById(id).lean().populate('accessories');
};

exports.getCube = (id) => {
    return Cube.findById(id).lean().populate('accessories');
};

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;


    return Cube.find({ name: { $regex: new RegExp(search, 'i') } })
        .where('difficultyLevel').gte(from).lte(to)
        .lean();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
}

exports.create = (cube) => {
    Cube.create(cube);
};