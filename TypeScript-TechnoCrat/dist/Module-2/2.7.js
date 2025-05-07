"use strict";
{
    const person1 = 'bike';
    const person2 = 'car';
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        id: 1001,
        name: 'owasfia',
        age: 8,
        address: 'dhk',
    };
    const car = {
        name: 'Toyota',
        model: 'tx09',
    };
    const result1 = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');
}
