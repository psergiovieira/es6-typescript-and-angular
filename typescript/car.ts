import {  People } from "./People";
class Car {    
    private model: string;
    private velocity: number = 0;
    private owner: People;

    public speedUp(): void {
        this.velocity += 10;
    }

    constructor(model:string, owner:People){
        this.model = model;
        this.owner = owner;
    }
}

let owner = new People("Paulo");

let car = new Car("Ferrari",owner);
console.log(car);
car.speedUp();
car.speedUp();
console.log(car);

let carsList: Car[] = [new Car("Fusca",owner), new Car("Peugeot 207", owner)];
console.log(carsList);