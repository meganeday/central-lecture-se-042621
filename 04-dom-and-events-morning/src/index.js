const body = document.querySelector('body')
const h3 = document.querySelector('h3')
//const todos = document.querySelector('#todos')
const container = document.querySelector('.container')
const todos = document.getElementById('todos')
const div = document.querySelectorAll('div')
const btn = document.getElementsByClassName('btn')
const btnTags = document.getElementsByTagName('button')

//console.log(todos.innerHTML)
//todos.children[1].innerText = 'Monday'
// todos.children[1].textContent = 'Monday'
todos.children[1].innerHTML = 'Monday'
todos.style.color = 'blue'
todos.className = 'todo container'

const toDoContainer = document.getElementById('todo-container')
// Array.prototype.map.call(toDoContainer.children, (item) => item.remove())
// toDoContainer.innerHTML = ''
// console.log(toDoContainer.children)

// let p = document.createElement('p')
// p.innerText = 'pet rose'
// p.className = 'todo'
// p.id = 'rose'
// console.log(p)

// toDoContainer.appendChild(p)

// console.log(document.querySelector('button'))
// console.log(document.querySelector('.btn'))
// console.log(document.querySelector('#alert'))
// let domButton = document.querySelector('#alert')
// domButton.innerText = 'Click Me'
// domButton.remove()

// function handleClick(){
//     alert('hi')
// }

let toDoArray = ['clean bathroom', 'eat cookies', 'take a nap']

function addAlertEvent(){
    let domButton = document.querySelector('#alert')
    domButton.addEventListener('click', () => alert('hi'))
}

function addLogEvent(){
    let logButton = document.querySelector('#log')
    logButton.addEventListener('click', () => console.log('click me'))
}

function addEventToForm(){
    let form = document.getElementById('todos-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.newTodos)
        console.log(event.target.newTodos.value)
        addPTag(event.target.newTodos.value)
    })
}
addAlertEvent()
addLogEvent()
addEventToForm()


function addPTag(content){
    let p = document.createElement('p')
    p.textContent = content
    toDoContainer.appendChild(p)
}

toDoArray.forEach(todo => addPTag(todo))

