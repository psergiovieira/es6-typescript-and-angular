import People from './People';
import Car from './Car';
import Motorcycle from './Motorcycle';
import IExecute from './IExecute';
import TestExecute from './TestExecute';

// let hello = (name: string) => {
//     console.log("Hello " + name);
// }

// hello("Paulo");


// let car = new Car("Ferrari",owner,"ABOIP");
// console.log(car);
// car.speedUp();
// car.speedUp();
// console.log(car);

// let carsList: Car[] = [new Car("Fusca",owner,"PASSA"), new Car("Peugeot 207", owner,"ASA456")];
// console.log(carsList);

// let owner = new People("Paulo");
// let car = new Car("Ferrari", owner,"ABOIP");
// let motto = new Motorcycle("AYOU");

// car.speedUp();
// motto.speedUp();

// console.log(car);
// console.log(motto);

let executeTest = (args: IExecute) => {
    args.execute();
}

executeTest(new TestExecute());