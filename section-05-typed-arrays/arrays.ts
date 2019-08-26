const carMakers = ["ford", "toyota", "chevy"];

const emptyArray: string[] = [];

let dates: Date[] = [];
dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corola"], ["camaro"]];

// flexible type
const importantDates: (Date | string)[] = [new Date(), "2020-01-30"];

const notGreateDates = []; //any[]
notGreateDates.push(new Date());
notGreateDates.push("2020-01-30");
