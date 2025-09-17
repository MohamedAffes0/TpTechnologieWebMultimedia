var x = 1;
let y = 2;
const z = 3;

{
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("Inside block:");
    console.log("x = " + x); // 100
    console.log("y = " + y); // 200
    console.log("z = " + z); // 300
}

console.log("Outside block:");
console.log("x = " + x); // 100
console.log("y = " + y); // 2
console.log("z = " + z); // 3

// Ici il y aura une erreur car on ne peut pas réassigner une constante
// z = 400; 