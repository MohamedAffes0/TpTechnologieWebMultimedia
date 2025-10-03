/**
 * This file defines an abstract class 'Course' with a title property and an abstract method 'getDescription'.
 * The constructor initializes the title property.
 * @abstract
 * @class Course
 * @property {string} title - The title of the course
 * @method {string} getDescription - Abstract method to get the course description
 */
export default abstract class Course {
    title: string;
    abstract getDescription(): string;
    constructor(title: string) {
        this.title = title;
    }
}

/**
 * OnlineCourse class extends the abstract Course class
 * @constructor 
 * @param {string} title - The title of the course
 * @param {number} duration - The duration of the course in minutes
 * @method {string} getDescription - Method to get the course description
 */
export class VideoCourse extends Course {
    duration: number;
    constructor(title: string, duration: number) {
        super(title);
        this.duration = duration;
    }
    getDescription(): string {
        return `Video course: ${this.title}, Duration: ${this.duration} minutes`;
    }
}

/**
 * LiveCourse class extends the abstract Course class
 * @constructor
 * @param {string} title - The title of the course
 * @param {Date} date - The date of the live course
 * @method {string} getDescription - Method to get the course description
 */
export class LiveCourse extends Course {
    date: Date;
    constructor(title: string, date: Date) {
        super(title);
        this.date = date;
    }
    getDescription(): string {
        return `Live course: ${this.title}, Date: ${this.date.toDateString()}`;
    }
}

