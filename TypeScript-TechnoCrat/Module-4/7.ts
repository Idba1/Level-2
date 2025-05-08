{

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
    }

    const t1 = getDayType(Day.Monday);   // Output: "Weekday"
    console.log(t1);
    const t2 = getDayType(Day.Sunday);   // Output: "Weekend"
    console.log(t2);




}