console.log("Hello World")

let message = "hello world"
// You cannot do this because message is string
// Is type safe
// message = 10

// Not recomended 
// Use the other types
let message2: any = "good bye"
message2 = 10

const message3: string = "Marco"

// Declaring types can save us from using other types on that variable
// const message4: string = 10

// Multiple types variable declaration
let number1: number | null = 10
number1 = null

// number, boolean, string, void, null, undefined -> Built in types (Primitives)

const array1: Array<string> = ["marco", "mykola", "yurii"]
// Array cannot have multiple types
//array1.push(1)

const marco: Record<string,string> = {
    name:"marco",
    address: "Some aveneue",
    // You cannot have dictionaries with multiple types
    //age: 13
}

// Creating your own types
type Person = {
    name: string
    age: number,
    // Optinonal Atribute
    address?: string
    subjects?: Array<string>
}

const mykola: Person = {
    name: "Mykola",
    age: 25,
    address: "Some aveneue"
}

const catalin: Person = {
    name: "Catalin",
    age: 28,
    subjects: ['python', 'node', 'javascript']
}

// OOP

class Animal {
    public readonly name: string

    constructor(name: string){
        this.name = name
    }

    // Do no use getter and setters
    // public getName(){
    //     return this.name
    // }

    public printName(){
        console.log(`The animal is called ${this.name}`)
    }
}

const dog = new Animal("Dog")
// Dont use this approach use constructor
// dog.name = "Dog"
// Change modifier to private can make dog.name not accesible
//dog.name = "cat"
dog.printName()

console.log('My dog name is', dog.name)

enum TypeOfFuel {
    Diesel,
    Electric,
    Gas
}

interface ICar {
    brand: string,
    model: string,
    fuel: TypeOfFuel,
    hasFuel: boolean

    drive: (km: number) => boolean
}

class Car implements ICar{
    readonly brand: string
    readonly model: string
    readonly fuel: TypeOfFuel
    hasFuel: boolean

    constructor(brand: string, model:string, fuel:TypeOfFuel){
        this.brand = brand
        this.model = model
        this.fuel = fuel
    }

    drive(km:number) {
        if(this.hasFuel && km > 0){
            return true
        }else{
            return false
        }
    }
}

class DieselCar extends Car {
    constructor(brand:string, model:string){
        super(brand, model, TypeOfFuel.Diesel)
    }
}

const teslaModelX: ICar = new Car("tesla", "X", TypeOfFuel.Electric)
const mustang: ICar = new DieselCar("ford", "mustang")

console.log("mustang.model =", mustang.model)
console.log("mustang.brand =", mustang.brand)
console.log("mustang.fuel =", mustang.fuel)