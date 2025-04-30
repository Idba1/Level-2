// Learning Function

// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

let sum = add(2, 3);
console.log(sum);


// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arrowSum = addArrow(4, 5);
console.log(arrowSum);

// default value
function defaultAdd(num1: number = 5, num2: number = 7): number {
    return num1 + num2;
}
console.log(defaultAdd());


// object--> function--> method
const proUser = {
    name: 'Idba',
    balance: 5,
    addBalance(balance: number): string {
        return `my new balance is ${this.balance + balance}`;
    }
}
console.log(proUser.addBalance(9));


const arr: number[] = [1, 2, 3, 4, 5, 6];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArr);