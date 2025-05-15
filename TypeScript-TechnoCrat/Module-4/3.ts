{

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];
        for (const arr of arrays) {
            for (const val of arr) {
                result.push(val);
            }
        }
        return result;
    }


    concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
   
    const test2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
    console.log(test2);
}