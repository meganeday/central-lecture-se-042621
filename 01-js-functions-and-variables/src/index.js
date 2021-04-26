// Note: Try testing out the code. Feel free to uncomment anything that does not have `Note:` at the start

// Note: Correction: `/` is a forward slash not a back slash 
// Note: Comments can be made with two forward slash //


// Note: variable in global scope 
// let referenceMaterial = 'video'


// Note: Defining a function with a function keyword 
// function pickAReferenceWithIf(){
  //Note:  if ... else conditional
//   if(referenceMaterial == 'book'){
//     console.log(`You don't know js`)
//   } else if (referenceMaterial == 'video') {
//     console.log('funFunFunction')
//   } else {
//     console.log('Full Stack Radio')
//   }
// }

// Note:  () => == function()

// Note: Defining a function with an arrow =>
let pickAReference = (referenceMaterial) => {
  //Note: Switch statement 
  switch(referenceMaterial){
    case 'book':
      return `You don't know js`
    case 'video':
      return 'funFunFunction'      
    default:
      return 'Full Stack Radio'

  }
  
}
// console.log(pickAReference('book', 'good'))
// console.log(pickAReference('video'))
// console.log(pickAReference('pod cast'))

//Note: Return statement
// function log 'eat food' if food is a cookie
// will return `undefined` because there is no return keyword 
// function eatOrNot(food){
//   if(food == 'cookie'){
//    console.log('eat food') 
//   }
// }

// Note: will return `eat food` because of the return keyword 
function eatOrNotReturn(food){
  if(food == 'cookie'){
    return 'eat food' 
  }
}

// console.log(typeof eatOrNot('cookie')) undefined
// console.log(typeof eatOrNotReturn('cookie')) string

// Note: Arrow functions without {} will have an implicit return
// Note: Here our ternary is returning a string, that value is passed to the arrow function, which returns it.
const pickAReferenceArrow = referenceMaterial => referenceMaterial == 'book'? `You don't know js`: 'funfunfuntion' 

// console.log(pickAReferenceArrow('book'))


// Loops
// 
function loopReferences(){
  const array = ['book', 'video', 'podcast']
  let i = 0
  while(i < array.length){
    // let hi = 'hi'
    console.log(array[i].toUpperCase())
    i++
    break
  }
  // console.log(hi)
}
// console.log(referenceArray)
loopReferences()
