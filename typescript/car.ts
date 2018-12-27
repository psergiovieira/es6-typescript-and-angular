import People from './People';
import Vehicle from './Vehicle';
class Car extends Vehicle {    
    private model: string;
    private velocity: number = 0;
    private owner: People;

    public speedUp(): void {
        this.velocity += 10;
    }

    constructor(model:string, owner:People, identification:string){
        super(identification);
        this.model = model;        
        this.owner = owner;
    }
}

let owner = new People("Paulo");
let car = new Car("Ferrari",owner,"ABOIP");
console.log(car);
car.speedUp();
car.speedUp();
console.log(car);

let carsList: Car[] = [new Car("Fusca",owner,"PASSA"), new Car("Peugeot 207", owner,"ASA456")];
console.log(carsList);