export default class Vehicle {
    private identification: string;
    protected velocity: number = 0;
    constructor(identification: string) {
        this.identification = identification;
    }

    public speedUp(): void {
        this.velocity += 10;
    }

}