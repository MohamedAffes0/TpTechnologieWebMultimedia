import Course from './courses';
import { User } from './models';

/**
 * Generic repository interface for managing entities
 * @template T - The type of entity the repository manages
 * @method {void} add - Method to add an entity
 * @method {void} remove - Method to remove an entity by id
 * @method {T[]} getAll - Method to retrieve all entities
 */
export interface Repository<T> {
    add(item: T): void;
    remove(id: number|string): void;
    getAll(): T[];
}

/**
 * UserRepository class implementing the Repository interface for User entities
 * @implements {Repository<User>}
 * @method {void} add - Method to add a user
 * @method {void} remove - Method to remove a user by id
 * @method {User[]} getAll - Method to retrieve all users
 */
export class UserRepository implements Repository<User> {
    private users: User[] = [];

    add(item: User): void {
        this.users.push(item);
    }

    remove(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    getAll(): User[] {
        return this.users;
    }
}

/**
 * CourseRepository class implementing the Repository interface for Course entities
 * @implements {Repository<Course>}
 * @method {void} add - Method to add a course
 * @method {void} remove - Method to remove a course by id
 * @method {Course[]} getAll - Method to retrieve all courses
 * @method {Course | undefined} getByTitle - Method to retrieve a course by title
 */
export class CourseRepository<T extends Course> implements Repository<T> {
    private courses: T[] = [];

    add(item: T): void {
        this.courses.push(item);
    }

    remove(title: string): void {
        this.courses = this.courses.filter(course => course.title !== title);
    }

    getAll(): T[] {
        return this.courses;
    }

    getByTitle(title: string): T | undefined {
        return this.courses.find(course => course.title === title);
    }
}