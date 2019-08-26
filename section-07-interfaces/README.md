- Interface

Creates a new type,describing the property names and value types of an object

- General strategy for resuable code in TS:

  - Create functions that accept arguments that are typed with interfaces
  - Objects/classes can decide to implement a give interface to work with a function

- An example:

```ts
interface Reportable {
  summary: () => string; // or it could just be summary(): string
}

const oldCivic = {
  model: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    ${this.model}
    ${this.year}
    ${this.broken}`;
  }
};

const drinkCoke = {
  color: "brown",
  sugar: 40,
  carbonated: true,
  summary(): string {
    return this.color;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// oldCivic has a function called summary, it satisfies that
// Reportable interface has to have a summary function
printSummary(oldCivic);
printSummary(drinkCoke);
```
