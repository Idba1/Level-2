{
    // type guards

    // typeof --> type guard

    type AlphaNeumeric = string | number;

    const add = (param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toLocaleString();
        }
    }

    const result1 = add(2, 3);
    const result2 = add('2', 3);
    console.log(result1);
    console.log(result2);

    // in guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'Admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        
        if ('role' in user) {
            user.role = 'Admin';
            console.log(`my name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`my name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'Idba Islam'
    }

    const adminUser: AdminUser = {
        name: 'Anisha Ibnat',
        role: 'Admin'
    }

    getUser(normalUser);
    getUser(adminUser);

    // const user1 = getUser({ name: 'Idba' });
    // const user2 = getUser({ name: 'Rifa', role: 'Admin' });

    










}