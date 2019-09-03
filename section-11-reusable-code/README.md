- `npm install @types/node` will install all types in node modules

- Enums:

  - Follow near-identical syntax rules as normal objects
  - Creates an object with the same keys and values when converted from TS to JS
  - Primary goal is to signal to other engineers that these are all closely realted values
  - Use whenever we have a small fixed set of values that are all closely related and known at compile time

- An example of an `enum`: created an enum, and a type `MatchResult`

```ts
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}
```

- An example of type assertion: Can be used with any types, not just enums

```ts
row[5] as MatchResult;
```

- Generics:

  - Like function arguments, but for types in class/function definitions
  - Allows us to define the type of a property/argument/return value at a future point
  - Used heavily when writing reusable code

- Inheritance: characterized by an "is a" relationship between two classes

- Composition: characterized by an "has a" relationship between two classes

- Statis method in a class can be called without instantiating the class
