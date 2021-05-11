// let garfield = {
//     name: "Garfield",
//     breed: "Persian Tabby",
//     introduce: function(){
//         return `Meow, my name is Garfield and I'm a Persian Tabby.`
//     }
// }

// let helloKitty = {
//     name: "Hello Kitty",
//     breed: "Cartoon",
//     introduce: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon.`
//     }
// }

// let keyboardCat = {
//     name: "Keyboard Cat",
//     bread: "Yes",
//     introduce: function(){
//         return `Meow, my name is Keyboard Cat and I like Bread.`
//     }
// }

// function Cat(name, age, color, breed){
//   this.name = name,
//   this.age = age,
//   this.color = color,
//   this.breed = breed
//   console.log(this)
// }
class Animal{
  constructor(name, age, color, breed) {
    this.name = name,
    this.age = age,
    this.color = color,
    this.breed = breed
}

}

class Dog extends Animal{
  
}

class Cat extends Animal{
  constructor(...arg) {
      super(...arg)
      this.favFoods = []
  }
  sayHi(){
    console.log(`Hi my name is ${this.name}`)
  }

  birthDay(){
    return this.age++
  }

  addFood(food){
    this.favFoods.unshift(food)
  }

  loopThroughFoods(){
    console.log(this)
    this.favFoods.forEach(this.printFoodArrow)
  }

  printFood(food){
    console.log(this)
    console.log(`${this.name} loves ${food}`)
  }

  printFoodArrow = (food) => {
    console.log(`${this.name} loves ${food}`)
  }



}

let rose = new Cat("rose", 9, "tuxedo", "domestic longhair", "beans")
// let luke = new Cat("luke", 3, "brow and white", "domestic longhair")
// let marshmallow =  new Cat("marshmallow", 3, "marshmallow", "ragdoll")
// rose.addFood('fish')
// rose.addFood('chicken')
// rose.addFood('house plants')
// rose.addFood('ix\'s food')



