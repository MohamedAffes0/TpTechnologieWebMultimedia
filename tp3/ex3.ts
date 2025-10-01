let id: number | string;

id = 101;
console.log(`ID as number: ${id}`);

id = "202A";
console.log(`ID as string: ${id}`);

type A = {
    name: string;
}

type B = {
    age: number;
}

type AB = A & B;
let person: AB = { name: "Alice", age: 30 };
console.log(`Person: Name - ${person.name}, Age - ${person.age}`);

type Status = "pending" | "done" | "canceled";
let taskStatus: Status;

taskStatus = "pending";
console.log(`Task Status: ${taskStatus}`);

taskStatus = "done";
console.log(`Task Status: ${taskStatus}`);

let unknownVar: unknown;
unknownVar = "Hello";
if (typeof unknownVar === "string") {
    console.log(`Unknown variable is a string: ${unknownVar}`);
    console.log(`String length: ${unknownVar.length}`);
}