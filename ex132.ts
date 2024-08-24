//Discuss the difference between default and named exports in JavaScript modules.

//name exports

import { person,subtract } from "./ex130.js";

let name = new person("zahid")
name.func()

console.log(subtract(2,2));


/// defaut export//////////////////

import person2 from "./ex131.js";

let namE = new person2("abdullah")
namE.func()




