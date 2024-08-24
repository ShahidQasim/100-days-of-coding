//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.


type shape = {
    kind : "circle" | "rectangle"
    radius? : number
    width? :  number
    height ? : number
}
 let circle : shape ={
    kind : "circle",
    radius : 23
 }
 let  rectangle : shape ={
    kind : "rectangle",
    width : 24,
    height: 22
 }
 console.log(circle);
 console.log(rectangle);
 
 
