{
    // interface

    type User1 = {          //type Alias
        name: string;
        age: number;
    }

    interface User2 {       // interface
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string };

    interface UserWithRole2 extends User2 {
        role: string;
    }



    const user2: UserWithRole2 = {
        name: 'Idba',
        age: 21,
        role: 'Admin',
    }


    type RollNumber = number;

    const user1: User2 = {
        name: 'Idba',
        age: 21
    }


    // js---> object, array--> object, function--> object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }


    const rollNumber1: Roll2 = [1, 2, 3, 4, 5, 6];


    type Add = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add = (num1, num2) => num1 + num2;
    const add2: Add2 = (num1, num2) => num1 + num2;


}