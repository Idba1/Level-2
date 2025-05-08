# Understanding Enums in TypeScript

## What is an Enum?

In TypeScript, an enum (short for enumeration) is a way to give friendly names to sets of numeric or string values. Enums make it easier to work with a group of related values by giving each value a name that’s easier to remember and use in your code.

## Why Use Enums?

Enums help make code cleaner, more readable, and less error-prone. Instead of using hard-coded values like numbers or strings again and again, you can use enum names which are easier to manage.

## Example: Numeric Enum

In your code, you created a numeric enum called Day:

```ts
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
```

In this example:

- Day.Monday has the value 0  
- Day.Tuesday has the value 1  

```ts
function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
```

This function checks whether the day is Saturday or Sunday, and returns "Weekend" or "Weekday" based on the day.

### Why is this helpful?

Using `Day.Saturday` instead of the number `5` makes your code easier to read and understand. You don’t have to remember which number stands for which day.

## Example: String Enum

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
```

In a function, you can use it like this:

```ts
function move(direction: Direction) {
    console.log("Moving", direction);
}

move(Direction.Left); // Output: Moving LEFT
```

String enums are useful when you want readable values and easy debugging, since the output will show words like "LEFT" instead of a number.
