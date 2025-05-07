"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // basic promise
    // simulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = 'something';
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        });
    };
    // calling create promise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
        return data;
    });
    showData();
    // for boolean
    const createPromiseBool = () => {
        return new Promise((resolve, reject) => {
            const data = true;
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        });
    };
    const showData2 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromiseBool();
        return data;
    });
    showData2();
    const createPromise3 = () => {
        return new Promise((resolve, reject) => {
            const data = { something: 'something' };
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        });
    };
    // calling create promise function
    const showData3 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise3();
        console.log(data);
        return data;
    });
    showData3();
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield response.json();
        console.log(data);
        return data;
    });
    getData();
}
