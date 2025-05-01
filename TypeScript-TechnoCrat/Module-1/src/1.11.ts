{
    // ternary operator || optional chaining || nullish  coalescing operator

    const age: number = 18;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("baccha");
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log({ isAdult });

    // nullish  coalescing operator
    // null || undefined --> decision making  

    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest';
    console.log({ result1 });

    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result2 });

    // optional chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string; //optional type
        }
    }

    const user: User = {
        name: 'Idba',
        address: {
            city: 'dhk',
            road: 'Awesome Road',
            presentAddress: 'dhk',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanentAddress'; // optional chaining
    console.log({ permanentAddress });
}