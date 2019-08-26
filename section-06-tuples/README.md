- A tuple:

```ts
const pepsi: [string, boolean, number] = ["brown", true, 40];
```

- An array:

```ts
const notATuple: (string | boolean | number)[] = ["brown", true, 40];
```

- A tuple with type annotation from type alias

```ts
// Type alias
type Drink = [string, boolean, number];
const coke: Drink = ["brown", true, 40];
```
