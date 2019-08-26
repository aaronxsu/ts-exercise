- Typed arrays:

Arrays where each element is some consistent type of value

- Why do we care about TS arrays

```ts
// TS can do type inference when extracting values from an array
const carMakers = ["ford", "toyota", "chevy"];
const ford = carMakers[0]; // it knows that `ford` is a string

// TS can prevent us from adding incompatible values to the array
carMakers.push(1); // this will give an error

// We can get help with `forEahc`, `map`, `reduce`, etc

// Flexible: arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), "2020-01-30"];
// but if not specified in declaration, it will be `any[]` type, which is not great
const notGreateDates = [];
notGreateDates.push(new Date());
notGreateDates.push("2020-01-30");
// notGreateDates is of type `any[]`
```

- When do we want to use typed arrays?

Any time we need to represent a collection of records with some arbitrary sort order
