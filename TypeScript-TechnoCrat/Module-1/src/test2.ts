type GenaricTupleTwo<T, U> = [T, U];

    interface UsersName {
        firstName: string,
        middleName: string,
        lastName: string,
    }

    interface UserContact {
        phone: number,
        email: string,
    }

    interface UserAddress {
        presentAdd: string;
        permanentAdd: string;
    }
    
    interface UserInfo {
        name: UsersName;
        userContact: UserContact;
        userAddress: UserAddress;
    }

    const Person: GenaricTupleTwo<number, UserInfo> = [
        874364389,
        {
            name: {
                firstName: 'reduan',
                middleName: 'ahmad',
                lastName: 'rasel',
            },
            userContact: {
                phone: 768453,
                email: 'A@gjkdfa.com',
            },
            userAddress: {
                presentAdd: 'Dhaka',
                permanentAdd: 'Brahmanbaria',
            }            
        }

    ];
    console.log(Person[1].name);
    console.log(Person[1].name.firstName);
    console.log(Person[1].userAddress);
