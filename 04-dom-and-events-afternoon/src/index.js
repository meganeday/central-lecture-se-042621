//Accessing DOM Elements
// console.log(document.querySelector('h4'))
// console.log(document.querySelector('#todo'))
// console.log(document.querySelector('.container'))
// console.log(document.querySelectorAll('button')[0])

// console.log(document.getElementById('todo-container'))
// console.log(document.getElementsByClassName('btn')[1])
// console.log(document.getElementsByTagName('div'))
//Changing DOM Elements
const h4 = document.querySelector('h4')
// console.log(todo.innerText)
//console.log(todo.textContent)
h4.innerText = 'Thursday'
h4.id = 'day'
h4.className = 'headers'
h4.style.color = 'blue'

const todo = document.querySelector('#todo-container')
// todo.remove()
todo.innerHTML = ''

// document.querySelector('body').innerHTML = '<p>hi</p>'
// const clickButton = document.getElementById('alert');
// clickButton.remove();


//Building DOM Elements
const myToDos = ['Go shopping','Take Rose to the Vet', 'Meal Prep']
function makeToDo(content){
    let p = document.createElement('p')
    p.innerText = content
    p.className = 'todo_item'
    todo.appendChild(p)
    //console.log(p)
}
myToDos.forEach(makeToDo)

//handlers
function handleClick(){
    alert('hi')
}

//Events
function addButtonAlert(){
    let btn = document.querySelector('#alert')
    btn.addEventListener('click', handleClick)
}
addButtonAlert()

function addButtonLog(){
    let logBtn = document.getElementById('log')
    logBtn.addEventListener('click',() => console.log('click me'))
}
addButtonLog()

function addEventToForm(){
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault() 
        console.log(event)
        console.log(event.target)
        makeToDo(event.target.newTodo.value)
    })
}
addEventToForm()