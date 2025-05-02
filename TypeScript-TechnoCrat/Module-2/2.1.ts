{
    // 
    // type assertion

    let anything: any;
    anything = 'Next Level Development';

    (anything as string).split(' ');
    console.log(anything);

    let anything2: any;
    anything = 222;
    (anything as number).toFixed();

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value);
            return `The Converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    console.log(result1);
    const result2 = kgToGm('1000') as string;


    type CustomeError = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as CustomeError).message);
    }
    // 
}