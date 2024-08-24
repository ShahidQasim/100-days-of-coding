// Explain how to export a function from one JavaScript file and import it into another file.
import { add } from "./ex129.js";
console.log(add(2, 3));
export class person {
    name;
    constructor(name) {
        this.name = name;
    }
    func() {
        console.log(`hey my name is ${this.name}`);
    }
}
export const subtract = (a, b) => a - b;
