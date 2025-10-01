/**
 * Defines a User type with optional and readonly properties.
 */
export interface User {
    id: number;
    name: string;
    email?: string; // Optional property
    readonly isAdmin: boolean; // Readonly property
}