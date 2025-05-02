{

    // generic type
    // reuseable 

    type GenericType<T> = Array<T>;

    // const rollNumbers: number[] = [1, 2, 3];
    const rollNumbers: GenericType<number> = [1, 2, 3];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericType<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericType<boolean> = [true, false, true];


    const user: GenericType<{ name: string, age: number }> = [
        {
            name: 'Idba',
            age: 100
        },
        {
            name: 'Owasfia',
            age: 100
        }
    ]


    const add = (num1: number, num2: number) => num1 + num2;
    add(23, 3);

    // generic tuple
    type GenericTuple<X, Y> = [X, Y]
    const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    const userWithId: GenericTuple<number, { name: string, email: string }> = [123, { name: 'Idba', email: 'I@gmail.com' }];

}