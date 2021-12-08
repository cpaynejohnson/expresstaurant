const express = require('express')
const path = require('path') //node native module
const { Item } = require('./models/item')
const { Restaurant } = require('./models/restaurant')

const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
// app.get('./Waiter', (req, res) => {
//     // let coinflip = Math.floor(Math.random()*2)
//     // if (coinflip == 1){
//     //     coinflip = 'Heads'
//     // } else {
//     //     coinflip = 'Tails'
//     // }
//     // res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants
app.get(`/restaurant`, async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    // console.log(req)
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})
app.get(`/restaurants/:name`, async (req,res) => {
    //find all Restaurants with certain name
    const thisRestaurant = await Restaurant.findOne({where:{name: req.params.name}})
    res.json(thisRestaurant)
})
app.get(`item/:vegetarian`), async (req, res) => {
    const thisItem = await Item.findAll({where:{vegetarian: '0'}})
    res.json(thisItem)

}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})