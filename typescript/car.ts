class Car {    
    private model: string;
    private velocity: number = 0;

    public speedUp(): void {
        this.velocity += 10;
    }

    constructor(model:string){
        this.model = model;
    }
}

let car = new Car("Ferrari");
console.log(car);
car.speedUp();
car.speedUp();
console.log(car);