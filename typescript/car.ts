import People from './People';
import Vehicle from './Vehicle';
export default class Car extends Vehicle {    
    private model: string;
    private owner: People;

    constructor(model:string, owner:People, identification:string){
        super(identification);
        this.model = model;        
        this.owner = owner;
    }
}