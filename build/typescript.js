var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
var message = "hello world";
var message2 = "good bye";
message2 = 10;
var message3 = "Marco";
var number1 = 10;
number1 = null;
var array1 = ["marco", "mykola", "yurii"];
var marco = {
    name: "marco",
    address: "Some aveneue"
};
var mykola = {
    name: "Mykola",
    age: 25,
    address: "Some aveneue"
};
var catalin = {
    name: "Catalin",
    age: 28,
    subjects: ['python', 'node', 'javascript']
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.printName = function () {
        console.log("The animal is called ".concat(this.name));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.printName();
console.log('My dog name is', dog.name);
var TypeOfFuel;
(function (TypeOfFuel) {
    TypeOfFuel[TypeOfFuel["Diesel"] = 0] = "Diesel";
    TypeOfFuel[TypeOfFuel["Electric"] = 1] = "Electric";
    TypeOfFuel[TypeOfFuel["Gas"] = 2] = "Gas";
})(TypeOfFuel || (TypeOfFuel = {}));
var Car = (function () {
    function Car(brand, model, fuel) {
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
    }
    Car.prototype.drive = function (km) {
        if (this.hasFuel && km > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Car;
}());
var DieselCar = (function (_super) {
    __extends(DieselCar, _super);
    function DieselCar(brand, model) {
        return _super.call(this, brand, model, TypeOfFuel.Diesel) || this;
    }
    return DieselCar;
}(Car));
var teslaModelX = new Car("tesla", "X", TypeOfFuel.Electric);
var mustang = new DieselCar("ford", "mustang");
console.log("mustang.model =", mustang.model);
console.log("mustang.brand =", mustang.brand);
console.log("mustang.fuel =", mustang.fuel);
//# sourceMappingURL=typescript.js.map