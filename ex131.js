// Create two modules; one that exports a class, and another
// that imports the class and creates an instance.
import { person } from "./ex130.js";
let name = new person("shahid");
name.func();
//////////////////////////////////////////////////////for other program
export default class person2 {
    name;
    constructor(name) {
        this.name = name;
    }
    func() {
        console.log(`hey my name is ${this.name}`);
    }
}
