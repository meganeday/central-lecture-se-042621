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

const printReceipt = (cake) => {
    console.log(`Your cake order is ${cake.amount} ${cake.flavor} for $${cake.price}`)
}

const addCost = (cake) => {
    cake.price+=100
    return cake
}

const handleCakeTask = (array, handleCake) => {
    for(let value of array){
        handleCake(value)
    }
}

// handleCakeTask(daysOrders, addCost)
// handleCakeTask(daysOrders, printReceipt)

// daysOrders.forEach(addCost)
// daysOrders.forEach(printReceipt)
// daysOrders.forEach((cake) => {
//     cake.price+=100
//     return cake
// })

const flavorOnly = (cake) => {
    return cake.flavor
}

const priceOnly = (cake) => {
    return cake.price
}

const myMap = (array, transform) => {
    let newArray = []
    for(let value of array){
        let newValue = transform(value)
        newArray.push(newValue)
    }
    return newArray
}

let flavorsOnlyArray = daysOrders.map(flavorOnly)
let priceArray = daysOrders.map(priceOnly)

const total = (array) => {
    let sum = 0
    array.forEach((price) => sum+= price)
    return sum
}

const pets = {
    cats: [
        {name:'rose', age:9},
        {name:'bubbles', age:3}
    ],
    dogs: [
        {name:'schobert', age: 5}
    ]
}

const returnName = (pet) => {
    return pet.name
}

const petNames = (pets) => {
    let catsArray = pets.cats.map(returnName)
    let dogsArray =  pets.dogs.map(returnName)
    return [...catsArray, ...dogsArray]
}

const allPets = [...pets.cats, ...pets.dogs]

const checkAge = (pet) => {
    return pet.age < 8
}

const myFilter = (array, check) => {
    let newArray = [ ]
    for(let value of array){
        let newValue = check(value)
        if(newValue == true){
            newArray.push(value)
        }
    }
    return newArray
}

allPets.filter((obj) => obj.age < 8)

const findRose = (pet) => {
    return pet.name == 'rose'
}

const myFind = (array, check) => {
    let result = null
    for(let value of array){
        let newValue = check(value)
        if(newValue == true){
            result = value
            break
        }
    }
    return result
}

allPets.find(findRose)