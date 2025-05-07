{
    // 
    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * 2;
        }
    }

    const test1 = processValue("hello"); // Output: 5
    const test2 = processValue(10);      // Output: 20
    console.log(test1);
    console.log(test2);

}