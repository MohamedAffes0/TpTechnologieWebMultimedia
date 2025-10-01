function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello, World!"));
console.log(identity<number>(42));

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirst<number>([1, 2, 3, 4]));
console.log(getFirst<string>(["a", "b", "c"]));

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        let index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getAll(): T[] {
        return this.items;
    }
}

const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.add(3);
console.log("Number Repository: ", numberRepo.getAll());
numberRepo.remove(2);
console.log("Number Repository after removal: ", numberRepo.getAll());

interface ApiResponse<T> {
    data: T;
    error?: string;
}

const response1: ApiResponse<string> = {
    data: "Success"
};

const response2: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "Item 1" },
    error: "No error"
};

console.log("Response 1: ", response1);
console.log("Response 2: ", response2);