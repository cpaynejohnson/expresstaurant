const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./models/restaurant')
const {Item} = require('./models/item')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
// const seedWaiter = [
//   {
//     waiter_name: 'James',
//     waiter_salary: '700',
//   },
//   {
//     waiter_name: 'Cathy',
//     waiter_salary: '1000',
//   },
//   {
//     waiter_name: 'Jimmy',
//     waiter_salary: '800',
//   },
//   {
//     waiter_name: 'James',
//     waiter_salary: '700',
//   },
// ]
const seedRestaurant = [
  {
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood'
  },
  {
    name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian'
  },
  {
    name: 'Burger King',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'McDonalds',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
]
// const seedMenu = [
//   {
//     title: 'Breakfast',
//     RestaurantId : 1,
//   },
//   {
//     title: 'Lunch',
//     RestaurantId : 2,
//   },
//   {
//     title: 'Dinner',
//     RestaurantId : 3,
//   },
// ]

const seedItem = [
  {
    name: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true,
    itemId : 3,
  },
  {
    name: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false,
    itemId : 2,
  },
  {
    name: 'hamburger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false,
    itemId : 1,
  }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    // await Waiter.bulkCreate(seedWaiter, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })