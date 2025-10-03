import { User, Role, ApiResponse } from './models';
import { UserRepository } from './repositories';
import Course, { VideoCourse, LiveCourse } from './courses';

let userRepository: UserRepository = new UserRepository();

const etudiant: User = {
    id: 1,
    name: "Med",
    role: Role.Student,
};
userRepository.add(etudiant);

const professeur: User = {
    id: 2,
    name: "Mohcen",
    role: Role.Teacher,
    email: "mohcen@gmail.com"
};
userRepository.add(professeur);

const videoCourse: VideoCourse = new VideoCourse("TypeScript Basics", 120);

const liveCourse: LiveCourse = new LiveCourse("Advanced TypeScript", new Date('2025-09-15'));

console.log(videoCourse.getDescription());
console.log(liveCourse.getDescription());
console.log(userRepository.getAll());

/**
 * Fetch a user by ID
 * @param id - User ID
 * @returns User data or error message
 */
function fetchUser(id: number): ApiResponse<User> {
    let user = userRepository.getAll().find(user => user.id === id);
    if (user) {
        return {data: user};
    }
    return {error: "User not found"};
}

console.log(fetchUser(1));
console.log(fetchUser(3));