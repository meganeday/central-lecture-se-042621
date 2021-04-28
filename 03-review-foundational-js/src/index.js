//Functions
// console.log(reminder()) hoisting
function reminder(){
    return 'do dishes'
}
//reminder()

const remindMe = function(){
    return 'feed cat'
}
//remindMe()

// arrow functions 
const setReminder = () => {
    return 'go shopping'
}
// no param add ()
const oneLineReminder = ( ) => 'clean bathroom'

const taskList = [ ]

// const addTask = function(task){
//     taskList.push(task)
//     return taskList
// }
// one param no need for ()
const addTask = task => {
        taskList.push(task)
        return taskList
    }
//addTask('feed cat')

const addTaskWithDay = (task, day) => {
    let taskAndDay = [task, day]
    taskList.push(taskAndDay)
    return taskList
}
//addTaskWithDaysAndStatus('clean bedroom', 'monday')
//addTaskWithDaysAndStatus('feed cat', 'monday', true)
const addTaskWithDaysAndStatus = (task, day, complete=false) => {
    let taskAndDayAndStatus = [task, day, complete]
    taskList.push(taskAndDayAndStatus)
    return taskList
}

const taskMap = {
    sunday:[],
    monday:[],
    tuesday:[],
    wednesday:[],
    thursday:[],
    friday:[],
    caterday:[]
}
//taskMap.monday
//taskMap["monday"]

const addTaskToMap = (task, day, complete=false) => {
    let taskAndStatus = [task, complete]
    if(day == 'sunday'){
        taskMap.sunday.push(taskAndStatus)
    } else if(day == 'monday'){
        taskMap.monday.push(taskAndStatus)
    } else if(day == 'tuesday'){
        taskMap.tuesday.push(taskAndStatus)
    } else if(day == 'wednesday'){
        taskMap.wednesday.push(taskAndStatus)
    } else if(day == 'thursday'){
        taskMap.thursday.push(taskAndStatus)
    } else if(day == 'friday'){
        taskMap.friday.push(taskAndStatus)
    } else if(day == 'caterday'){
        taskMap.caterday.push(taskAndStatus)
    } 
    return taskMap
}

const addTaskToMapDRY = (task, day, complete=false) => {
    // console.log(day)
    // console.log(taskMap[day])
    taskMap[day].push([task,complete])
    return taskMap
}
addTaskToMapDRY('do dishes', 'sunday')
addTaskToMapDRY('feed cat', 'sunday')

const printTask = (taskArray) => {
    for(let task of taskArray){
        console.log(`task: ${task[0]}`)
        console.log(`status: ${task[1]}`)
    }

}

const changeToComplete = (array) => {
    for(let task of array){
        //console.log(task)
        task[1] = true
    }
    return taskMap
}


const selectDay = (day, handleTask) => {
    for(let key in taskMap){
        if(key == day){
            handleTask(taskMap[day])
        }
    }
}
//selectDay('sunday', changeToComplete)
//selectDay('sunday', printTask)
