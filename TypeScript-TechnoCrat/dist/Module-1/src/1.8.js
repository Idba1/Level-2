"use strict";
{
    // destructuring
    // object destructuring
    // array destructuring
    // object destructuring
    const user = {
        id: 1017,
        name: {
            firstName: 'Monira',
            middleName: 'Islam',
            lastName: 'Idba'
        },
        contactNo: '01618900000',
        address: 'Uganda',
    };
    const { contactNo: phoneNo, name: { middleName: midName } } = user; //Name Alias
    console.log(phoneNo, midName);
    // array destructuring
    const myFriends = ['Sumaiya', 'Shuva', 'Idba', 'Cara'];
    const [, , bestFriend, ...rest] = myFriends;
    console.log(bestFriend);
}
