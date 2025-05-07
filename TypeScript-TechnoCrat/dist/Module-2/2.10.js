"use strict";
{
    // mapped types
    const arrOffNumbers = [1, 2, 3, 4];
    // const arrOfString: string[] = ['1', '2', '3', '4'];
    const arrOfString = arrOffNumbers.map(number => number.toString());
    console.log(arrOfString);
    const area1 = {
        height: '100',
        width: 50,
    };
}
