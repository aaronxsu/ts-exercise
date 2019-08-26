const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
}; // return type is void now

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const throwError = (msg: string): never => {
  throw new Error(msg);
};

const throwErrorTwo = (msg: string): void => {
  if (!msg) {
    throw new Error(msg);
  }
};

const throwErrorThree = (msg: string): string => {
  if (!msg) {
    throw new Error(msg);
  }
  return msg;
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeatherES6 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
logWeatherES6(forecast);
