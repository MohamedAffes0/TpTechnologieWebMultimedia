let nom: string = "Mohamed Affes";
let age: number = 20;
let isAdmin: boolean = true;

let scores: number[] = [85, 90, 78];

let etudent: [string, number] = ["Med", 22];

enum Role {
    User,
    Admin,
    SuperAdmin
}

let userRole: Role = Role.Admin;

console.log(`Name: ${nom}, Age: ${age}, Is Admin: ${isAdmin}`);
console.log(`Scores: ${scores}`);
console.log(`Student: ${etudent[0]}, Age: ${etudent[1]}`);
console.log(`User Role: ${Role[userRole]}`);
