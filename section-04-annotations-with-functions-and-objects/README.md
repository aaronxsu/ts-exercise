- Type Annotations for functions:

Code we add to tell TypeScript what types of arguments a function will received and what type of values it will return

- Type Inference for functions:

TypeScripts tries to figure out what type of values a function will return

- We always want to add types to function arguments since there is no type inference for arguments

- Adding types to arguments and the returns is strongly recommended

- If we want a function to have return type of `void`, it can:

  - have no `return` statement
  - `return null`
  - `return undefined`

- `void` v.s. `never`:

```ts
const throwError = (msg: string): never => {
  throw new Error(msg);
};

const throwErrorTwo = (msg: string): void => {
  if (!msg) {
    throw new Error(msg);
  }
};
```

- Destrucutring with Annotations:

```ts
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
```
