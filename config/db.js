const mongoose = require('mongoose');

const mongoDB = async function maing() {
    await mongoose.connect('mongodb://localhost:27017/Praktikkk4c');
    console.log('We Are Connected!')
}

module.exports = mongoDB;