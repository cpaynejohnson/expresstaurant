// const {sequelize, DataTypes, Model} = require('../db')
const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Restaurant}