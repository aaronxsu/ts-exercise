- A simple example of class generics: Note that the `<string>` is not necessary because it can be inferred

```ts
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfStrings = new ArrayOfAnything<string>(["a", "bc"]);
```

- A simple example of function generics: Note that the `<string>` is not necessary because it can be inferred

```ts
function printAnything<T>(toPrint: T[]): void {
  for (let i = 0; i < toPrint.length; i++) {
    console.log(toPrint[i]);
  }
}

printAnything<string>(["a", "bc"]);
```

- Generic Constraints:

```ts
interface Printable {
  print(): void;
}

class Car implements Printable {
  print(): void {
    console.log("I am a car");
  }
}

class House implements Printable {
  print(): void {
    console.log("I am a Housee");
  }
}

function printCarOrHouse<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
```
