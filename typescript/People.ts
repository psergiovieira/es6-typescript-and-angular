export default class People{
    private name: string;
    public getName(): string{
        return this.name;
    } 

    constructor(name:string){
        this.name = name;
    }
}