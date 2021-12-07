const {sequelize, DataTypes, Model} = require('../db')

class Meal extends Model {}
restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {restaurant}