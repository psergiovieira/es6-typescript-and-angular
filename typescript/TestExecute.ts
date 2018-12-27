import IExecute from "./IExecute";

export default class TestExecute implements IExecute{
    execute(): void {
        console.log("Executing");        
    }

}