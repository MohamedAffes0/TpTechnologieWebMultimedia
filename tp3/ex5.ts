function add(a: number, b: number): number {
    return a + b;
}

console.log(`5 + 3 = ${add(5, 3)}`);

function greet (name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}.`);
    }
}

greet("AFFES", 20);
greet("Med");

function power(base: number, exp: number = 2): number {
    return Math.pow(base, exp);
}

console.log(`3^3 = ${power(3, 3)}`);
console.log(`4^2 = ${power(4)}`);

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}

console.log(`Combine numbers: ${combine(5, 10)}`);
console.log(`Combine strings: ${combine("Hello, ", "World!")}`);
// console.log(`Combine mixed: ${combine(5, "Test")}`); // This will throw an error