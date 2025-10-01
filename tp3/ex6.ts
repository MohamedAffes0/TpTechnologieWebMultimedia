class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Affes", 20);
person1.greet();

class Student extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }
}

const student1 = new Student("Affes", 20, "FST");
student1.greet();
console.log(`I study at ${student1.school}.`);

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle(5);
console.log(`Area of circle with radius ${circle1.radius} is ${circle1.area()}.`);

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(4, 6);
console.log(`Area of rectangle with width ${rectangle1.width} and height ${rectangle1.height} is ${rectangle1.area()}.`);

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    model: string;

    constructor(model: string) {
        this.model = model;
    }

    drive(): void {
        console.log(`Driving a ${this.model}`);
    }
}

const car1 = new Car("Mercedes cls63");
car1.drive();
