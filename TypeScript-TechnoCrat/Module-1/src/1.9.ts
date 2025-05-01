{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string;
    } = {
        name: "Idba Islam",
        age: 21,
        gender: 'female',
        contactNo: '0161456789',
        address: 'Birulia, Savar'
    }

    const student2: Student = {
        name: "Monira Islam",
        age: 20,
        gender: 'female',
        address: 'Birulia, Savar'
    }

    const student3: Student = {
        name: "Owasfia",
        age: 8,
        gender: 'female',
        address: 'dhk'
    }

    console.log(student3.name);

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = 'Anisha Ibnat';
    const isAdmin: IsAdmin = true;
    console.log(userName);

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;
    console.log(add(2, 5));
}