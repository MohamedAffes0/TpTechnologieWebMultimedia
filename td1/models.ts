/**
 * User roles in the system
 */
export enum Role {
    Student,
    Teacher,
    Admin
}

/**
 * User interface representing a user in the system
 * @property {number} id - Unique identifier for the user
 * @property {string} name - Name of the user
 * @property {Role} role - Role of the user in the system
 * @property {string} [email] - Optional email address of the user
 */
export interface User {
    id: number;
    name: string;
    role: Role;
    email?: string;
}

/**
 * Generic API response type
 * @template T - The type of data contained in the response
 * @property {T} [data] - The data returned from the API
 * @property {string} [error] - Error message if the API call failed
 */
export type ApiResponse<T> = {
    data?: T;
    error?: string;
}