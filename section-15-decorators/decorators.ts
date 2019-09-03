class Boat {
  // property
  color: string = "red";

  // accessor
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(target: any, key: string): void {
  console.log("Target:", target);
  console.log("Key", key);
}
