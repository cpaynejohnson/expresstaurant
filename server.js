const express = require('express')
const path = require('path') //node native module
const { Item } = require('./models/item')

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
app.get('/item', async (req,res) => {
    //find all instances of the Model Restaurant
    const allItems = await Item.findAll()
    console.log(req)
    //respond with allRestaurants as a json objeect
    res.json(allItems)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})