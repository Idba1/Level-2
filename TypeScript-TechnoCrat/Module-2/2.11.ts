{
    // utility types

    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, 'name'>;
    type NameAge = Pick<Person, 'name' | 'age'>;


    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>


    // Required
    type PersonRequired = Required<Person>


    // Partial
    type PersonPartial = Partial<Person>


    // Readonly

    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: 'Rifa Tasniya',
        age: 9,
        contactNo: '0199'
    }
    // person1.age = 8; //readonly type


    // Record

    // type MyObj = {
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, string>

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd',
    }
    console.log(obj1.a);
    console.log(obj1.b);







}