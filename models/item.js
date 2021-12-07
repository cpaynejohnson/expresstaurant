// const {sequelize, DataTypes, Model} = require('../db')
const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')


class Item extends Model {}
Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    itemId: DataTypes.INTEGER,
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Item}