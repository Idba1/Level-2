{


    // conditional type
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // check car ache kina/ bike ache kina/ ship ache kina/ tractor ache kina
    // type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasCar = CheckVehicle<'car'>
    type HasTractor = CheckVehicle<'Tractor'>
    type HasPlane = CheckVehicle<'plane'>









}