- Type Annotations for variables:

Code we add to tell TypeScript what type of value a variable will refer to. We can use primitive types and object types.

- Type inference for variables:

TypeScript tried to figure out what type of value a variable refers to

- Annotations for arrays:

```ts
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 4];
let truths: boolean[] = [true, true, true];
```

- Annotations for object literals:

```ts
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};
```

- Annotations for functions:

```ts
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

- If variable declaration and initialization are on the same line, type inference is possible. But in the below case, it will think `color` is of type `any`:

```ts
let color;
color = "red";
```

- Add type annotations when:
  - a function returns the `any` type and we need to clarify the value
  - we declare a variable on one line the initialize it later
  - we want a variable to have a type that cannot be inferred
- How the `JSON.parse()` works:
  https://drive.google.com/file/d/1eD5xIv6We7Vl92dihKa63awN0WSvu8Wh/view?usp=sharing
- If we do not provide type annotations, the type TypeScript infers to the return of `JSON.parse()` will be `any`:
  - it is a type
  - means TS does not know what this is, cannot check for correct property references
  - **avoid variables with `any` type at all costs**
