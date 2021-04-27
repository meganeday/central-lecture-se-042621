// Arrays
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']

cakeNames[1] = 'Earl'

Object.keys(cakeNames)
Object.values(cakeNames)

let cakeOrder1 = {
    id:1,
    flavor:'Earl Grey',
    size: 'cup cakes',
    amount: 12,
    price: 18.00
}

cakeOrder1.flavor
cakeOrder1.size
cakeOrder1.amount
cakeOrder1.price = 20
//console.log(cakeOrder1)
//cakeOrder1["flavor"]
Object.keys(cakeOrder1)
Object.values(cakeOrder1)
Object.entries(cakeOrder1)


function loopThroughCake(){
    for(let key in cakeOrder1){
        console.log(cakeOrder1[key])
    }
}
//loopThroughCake()

const daysOrders = [
    {
        id: 13,
        flavor: 'Salted Carmel',
        size: '6" cake',
        amount: 1,
        price: 40.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]

function updatePrice() {
    // for ( let i = 0; i < daysOrders.length; i++){
    //     daysOrders[i].price = daysOrders[i].price + 5
    // }
    // for (let index in daysOrders){
    //     console.log(index)
    //     daysOrders[index].price+=5
    // }
    for (let value of daysOrders){
        console.log(value)
        value.price+=5
    }



}    
//updatePrice()


const printCake = function(cake){
    console.log(cake)
}
const addCost = function(cake){
    cake.price+=100
    return cake
}
//console.log(printCake(cakeOrder1))

function handleCake(cb){
    let cake = {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
    return cb(cake)
    // return cb(cake)
}

console.log(handleCake(addCost))

function myForEach(array, callBack){
    for(let value of array){
        callBack(value)
    }
}

myForEach(daysOrders, addCost)
myForEach(daysOrders, printCake)
myForEach(daysOrders, (cake) => {
    cake.flavor = cake.flavor.toUpperCase()
})


daysOrders.forEach(cake => cake.flavor = cake.flavor.toUpperCase())
console.log(daysOrders)