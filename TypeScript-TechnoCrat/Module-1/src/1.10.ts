{

    // // union types
    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    // type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

    // type Developer = FrontendDeveloper | FullStackDeveloper;

    // const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    // type User = {
    //     name: string;
    //     email: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'A+' | 'O+' | 'AB+' | 'A-' | 'O-' | 'AB-';
    // }

    // const user: User = {
    //     name: 'Idba Islam',
    //     email: 'idba@gmail.com',
    //     gender: 'female',
    //     bloodGroup: 'O+',
    // }



    // Intersection type
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullStackDeveloper = {
        skills: ['html', 'css', 'express', 'dbms'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
    }

    console.log(fullstackDeveloper.skills);
}