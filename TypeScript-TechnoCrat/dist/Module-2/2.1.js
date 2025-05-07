"use strict";
{
    // 
    // type assertion
    let anything;
    anything = 'Next Level Development';
    anything.split(' ');
    console.log(anything);
    let anything2;
    anything = 222;
    anything.toFixed();
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value);
            return `The Converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    console.log(result1);
    const result2 = kgToGm('1000');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    // 
}
