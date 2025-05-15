{
    function formatString(input: string, toUpper?: boolean): string {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }

    const test1 = formatString("Hello");
    console.log(test1);
    const test2 = formatString("Hello", true);
    console.log(test2);
    const test3 = formatString("Hello", false);
    console.log(test3);





}