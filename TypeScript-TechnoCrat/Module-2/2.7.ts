{

    // generic constraint with keyof operator

    type vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship'; //manually

    type Owner2 = keyof vehicle



    const person1: Owner = 'bike';
    const person2: Owner2 = 'car';



    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }


    const user = {
        id: 1001,
        name: 'owasfia',
        age: 8,
        address: 'dhk',
    }

    const car = {
        name: 'Toyota',
        model: 'tx09',
    }

    const result1 = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');







}