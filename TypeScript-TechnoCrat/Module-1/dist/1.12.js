"use strict";
{
    // nullable type
    const searchName = (value) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('There is nothing too search');
        }
    };
    searchName('Idba');
}
