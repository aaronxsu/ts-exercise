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
