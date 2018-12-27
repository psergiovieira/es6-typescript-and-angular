import Vehicle from './Vehicle'
export default class Motorcycle extends Vehicle{
    constructor(identification:string){
        super(identification); 
    }
    public speedUp(): void {
        this.velocity += 50;
    }

}