// Reference Type --> Object

const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Monira',
    middleName: 'Islam',
    lastName: 'Idba'
}


const user2: {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
    Company: 'Programming Hero'; //type --> literal types (for fixed value)
    readonly age: number;  //type --> literal types (for fixed value)
} = {
    firstName: 'Jhankar',
    lastName: 'Mahbub',
    isMarried: true,
    Company: 'Programming Hero',
    age: 34,
}

console.log(user2);
let companey = user2.Company;
console.log(companey);

console.log(user2.firstName);
user2.firstName = 'Js Dude';
console.log(user2.firstName);
