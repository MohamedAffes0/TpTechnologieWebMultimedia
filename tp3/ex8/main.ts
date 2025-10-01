import { add } from './math';

console.log(`5 + 3 = ${add(5, 3)}`);

import { subtract } from './index';
console.log(`5 - 3 = ${subtract(5, 3)}`);

import { User } from './types';

const user1: User = {
    id: 1,
    name: "Alice",
    isAdmin: false
};
console.log("User1: ", user1);