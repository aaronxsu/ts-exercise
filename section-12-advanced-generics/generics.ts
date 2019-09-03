// generics in class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfStrings = new ArrayOfAnything<String>(["a", "bc"]);

// generics in functions
function printAnything<T>(toPrint: T[]): void {
  for (let i = 0; i < toPrint.length; i++) {
    console.log(toPrint[i]);
  }
}

printAnything<string>(["a", "bc"]);

// generics constraints

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

printCarOrHouse<House>([new House(), new House()]);
