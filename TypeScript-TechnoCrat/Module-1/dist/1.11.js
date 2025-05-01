"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish  coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("baccha");
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log({ isAdult });
    // nullish  coalescing operator
    // null || undefined --> decision making  
    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    console.log({ result1 });
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result2 });
    const user = {
        name: 'Idba',
        address: {
            city: 'dhk',
            road: 'Awesome Road',
            presentAddress: 'dhk',
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanentAddress'; // optional chaining
    console.log({ permanentAddress });
}
