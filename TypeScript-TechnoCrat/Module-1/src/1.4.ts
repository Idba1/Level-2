// Basic Data Type 

// primitive
// string
let firstName: string = "Idba";

// number
let roll: number = 232 - 35 - 17;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// any
let d;
d = 123;
d = 'Idba';
d = true;

// number
let e: number;


// non-primitive
// Array
let friends: string[] = ['rachel', 'monica'];
friends.push('Owasfia');
console.log(friends[2]);

let eligibleRollList: number[] = [1, 2, 3, 4, 5];
eligibleRollList.push(6);


// tuple --> Array --> Order --> Type of values
let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [50, 'Idba', true];
console.log(ageName[1]);
ageName[1] = 'Islam';
console.log(ageName[1]);