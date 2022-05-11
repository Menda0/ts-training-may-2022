console.log('hello world')

// Not recomended
var helloString = "hello world"

// Recomend way
let anotherString = "Good bye world"
const number1 = 29

function printMessage1(){
    var array = ["hello", "world", "team"]
    for(var i=0; i < array.length; i++){
        console.log("array["+i+"]="+array[i])
    }
    // Using fuctional scope by default
    // Can be a problem 
    // Not recomended
    // Can have interferances
    console.log("I can access the value i =", i)
}
printMessage1()

function printMessage2(){
    const array = ["hello", "world", "team"]
    for(let i=0; i < array.length; i++){
        console.log("array["+i+"]="+array[i])
    }
    // Using let we are using block scope instead of functional scope
    // console.log("I can access the value i =", i)
}

printMessage2()

// Multiple Array/List/Tuples
const array1 = [1,2,3,'hello', true]
console.log("array1[0]=",array1[0])

// Object/Dictionary (Key, Value) Pair
const marco = {
    name:"Marco",
    age: 32
}

// Object access
console.log("marco.name =", marco.name)

// Dictionary Access
console.log("marco['name'] =", marco["name"])

// Composing datastructures
const name = "Mykola"
const age = 20

const mykola = {
    name,
    age
}

console.log("mykola.age =", mykola.age)

// Deconposing data structure
const yurii = {
    name: "Yurii",
    age: 30,
    subject: ["python", "nodejs", "typescript"]
}

const {subject: yuriiSubjects} = yurii
console.log("yuriiSubjects =", yuriiSubjects)

const array2 = [1,2,3,4,5]

const [one,two,three] = array2
console.log("one, two, three =", one, two, three)

// ...
// Spread operator
const teodora = {
    name: "Teodora",
    subject: ["html", "javascript", "php"]
}

const stefan = {
    ...teodora,
    name: "stefan"
}

console.log("teodora.subject =", teodora.subject)
console.log("stefan.subject =", stefan.subject)
console.log("stefan.name =", stefan.name)

teodora.subject.push("Typescript")


// ... is not a clone
console.log("Added typescript to Teodora ...")
console.log("teodora.subject =", teodora.subject)
console.log("stefan.subject =", stefan.subject)

const fs = require('fs')

function getParticipants1(){
    let participants = []
    fs.createReadStream("resources/participants.txt").on("data", function(text){
        participants = text.toString().split(",")

        // Not solved the problem 
        // return statment is in scope with function 104/110
        return participants
    })

    // Not solve the problem 
    // Return will be empty because the on event will not be executed in time
    return participants
}
console.log("getParticipants1() =",getParticipants1())

function getParticipants2(file){
    return new Promise(function(resolve, reject){
        let participants = []

        if(!file.includes(".txt")){
            reject("This is not a txt")
        }

        fs.createReadStream(file).on("data", function(text){
            participants = text.toString().split(",")
            resolve(participants)
        })
    })
}

// Interact with promisses using callbacks
getParticipants2('resources/participants.txt').then(function(participants){
    console.log(participants)
}).catch(function(error){
    console.error(error)
})

getParticipants2('resources/participants.csv').then(function(participants){
    console.log(participants)
}).catch(function(error){
    console.error(error)
})

async function getAllParticipants(){
    

    // Not readible
    // Not efitient
    // const participants = []
    // getParticipants2('resources/participants.txt').then(function(p){
    //     participants.concat(p)
    //     getParticipants2("resources/participants2.txt").then(function(p){
    //         participants.concat(p)
    //     })
    // })

    // Another way to interact with promisses
    // Will wait for the resolve of the promise
    // Code is readible
    // Not efitient
    // try{
    //     const participants1 = await getParticipants2("resources/participants.txt")
    //     const participants2 = await getParticipants2("resources/participants2.txt")
    //     const participants3 = await getParticipants2("resources/participants3.txt")
    // }catch(e){
    //     console.error(e)
    // }
    

    // Code is readible
    // Effitient
    const allTheParticipants = await Promise.all([
        getParticipants2("resources/participants.txt"),
        getParticipants2("resources/participants2.txt"),
        getParticipants2("resources/participants3.txt")
    ])

    console.log(allTheParticipants)
}

getAllParticipants()

function circleArea(r){
    return 3.14 * 3.14 * r
}

const circleArea2 = function(r){
    return 3.14 * 3.14 * r
}

// () => {}
const circleArea3 = (r) => { return 3.14*3.14*r }
const circleArea4 = r => 3.14*3.14*r

const loadSudokus = (source) => {
    return Promise((resolve, reject) => {
        
    })
}
