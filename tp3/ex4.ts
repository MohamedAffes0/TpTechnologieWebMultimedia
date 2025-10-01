interface User {
    id: number;
    name: string;
    email?: string; // Optional property
    readonly isAdmin: boolean; // Readonly property
}

const user1: User = {
    id: 1,
    name: "AFFES",
    email: "mail@affes.com",
    isAdmin: false
}

console.log("User1: ", user1);

interface Admin extends User {
    permissions: string[];
}

const admin1: Admin = {
    id: 2,
    name: "Admin AFFES",
    email: "admin.mail@affes.com",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
}

console.log("Admin1: ", admin1);