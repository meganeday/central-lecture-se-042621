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
//     this.name = name
//     this.age = age
//     this.color = color
//     this.breed = breed
//     console.log(this)
// }

//Note: Parent Class or Super Class
class Animal {
  constructor(name, age, color, breed, image, species) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.image = image;
  }
  isAnimal() {
    return true;
  }
}

//Note: Children Class
class Dog extends Animal {
  constructor(name, age, color, breed, image, species) {
    super(species, name, age, color, breed, image);
    this.favBall = [];
  }
}

class Cat extends Animal {
  constructor(name, age, color, breed, image, species) {
    super(species, name, age, color, breed, image);
    this.favFood = [];
  }
  sayHi() {
    return `Meow, I\'m ${this.name}`;
  }
  addFood(food) {
    this.favFood = [...this.favFood, food];
  }
  
  loopThroughFoods() {
    console.log(this);
    //Note: Callbacks lose the context of this
    //Note: Without bind, this will be undefined
    this.favFood.forEach(this.logFoods.bind(this));
  }
  logFoods(food){
      console.log(this)
      console.log(`${this.name} loves ${food}`)
  }

  loopThroughFoodsArrow() {
    this.favFood.forEach(this.logFoodsArrow);
  }
  //Note: Arrow functions inherit this through context
  logFoodsArrow = (food) => console.log(`${this.name} loves ${food}`);
}

const rose = new Cat(
  "rose",
  9,
  "tuxedo",
  "domestic longhair",
  "./assets/gm_cat.png",
  "Felis catus"
);
const luke = new Cat(
  "luke",
  3,
  "white and brown",
  "domestic longhair",
  "./assets/luke.png",
  "Felis catus"
);
const marshmallow = new Cat(
  "marshmallow",
  5,
  "marshmallow",
  "ragdoll",
  "./assets/marshmallow.png",
  "Felis catus"
);
//console.log(rose.sayHi())
// console.log(luke.name)
// console.log(marshmallow)
rose.addFood("fish");
rose.addFood("chicken");
rose.addFood("plants");
rose.addFood("ix's food");
//console.log(rose.favFood)

// let {name, age, likesMice} = luke
// console.log(name, age, likesMice)

//Note: Destructuring 
//Objects
let { age, name, image } = luke;
console.log(name, age, image);

function birthDay({ age, name }) {
  console.log(`Happy Birthday ${name} you are ${age} old!`);
}
birthDay(rose);
//Arrays
let [food1, food2] = rose.favFood;
console.log(food1, food2);

let [a, b] = ["red", "blue"];
console.log(a);
console.log(b);
