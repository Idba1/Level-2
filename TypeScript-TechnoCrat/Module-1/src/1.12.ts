{

    // nullable type || unknown type || never

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('There is nothing too search');
        }
    }

    searchName('Idba');
    searchName(null);

    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            console.log(result);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`)
        }
        else {
            console.log('Wrong input');
        }
    }

    getSpeedInMeterPerSecond(1000);
    getSpeedInMeterPerSecond(`1000 kmh^-1`);
    getSpeedInMeterPerSecond(null);


    // never type 
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError(`mushkil se error hogaya`);
}