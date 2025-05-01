{

    // union types
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup: 'A+' | 'O+' | 'AB+' | 'A-' | 'O-' | 'AB-';
    }

    const user: User = {
        name: 'Idba Islam',
        email: 'idba@gmail.com',
        gender: 'female',
        bloodGroup: 'O+',
    }



}