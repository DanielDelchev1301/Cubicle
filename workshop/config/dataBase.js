const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/cubeDataBase';

exports.initializeDataBase = () => mongoose.connect(connectionString);