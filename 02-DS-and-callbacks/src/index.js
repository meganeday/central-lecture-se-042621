const cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Note: Accessing data
cakeNames[0]
//console.log(cakeNames.slice(2, 4))


//Note: Changing data
cakeNames[0] = 'Chocolate'
cakeNames.push('Fish')
cakeNames.unshift('Milk')
cakeNames.pop()
cakeNames.shift()
//console.log(cakeNames)


//Plain Old JavaScript Object
const cakeOrder1 = {
    id:1,
    flavor:'Earl Grey',
    size: 'cup cakes',
    amount: 12,
    price: 18.00
}
//Note: Accessing data from objects

// console.log(cakeOrder1.flavor)
// console.log(cakeOrder1['size'])
// console.log(Object.keys(cakeOrder1))
//console.log(Object.values(cakeOrder1))
//console.log(Object.entries(cakeOrder1))

function loopThroughCakeKeys(){
    for(let item in cakeOrder1){
        //console.log(item)
        // console.log(typeof item)
        console.log(cakeOrder1[item])
        //cakeOrder1['id']
        //cakeOrder1['flavor']
        //cakeOrder1['size']
        //cakeOrder1['amount']
        //cakeOrder1['price']
    }
}
//loopThroughCakeKeys()

//Note: Changing data
// cakeOrder1.price = 20
// cakeOrder1['size'] = '6in'
// console.log(cakeOrder1)


const daysOrders = [
    {
        id: 13,
        flavor: 'Vanilla',
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

//console.log(daysOrders[1].flavor)

// console.log(daysOrders[1])
// console.log(daysOrders[2].price)

// for (key in daysOrders) {
//     let oldPrice = daysOrders[key].price;
//     daysOrders[key].price = oldPrice + 5.00;
//    }
//    console.log(daysOrders)
   
//Note: Callbacks 
//Note: Higher order function
function addTax(cake){
    let tax = 1.25
    return function(){
        return cake.price = cake.price  + tax
    }
}
//console.log(addTax(cakeOrder1)())

const printValues = (cake) => {
    // console.log(cake)
    //Note: return the values from cake
    return Object.values(cake) 
}

const printCake = (cake) => { 
    return cake
}
function processOrders(callback){
    console.log(callback)
    //Note: cb is called and passed a cake
    return callback(cakeOrder1)
    // for(let cake of daysOrders){
    //     console.log(cb(cake))
    // }
}

console.log(
    //Note: processOrders is being called
    //Note: it is passed () => as a callback
     processOrders(() => 'hi'),
     processOrders(printCake),
     processOrders(printValues)
)

