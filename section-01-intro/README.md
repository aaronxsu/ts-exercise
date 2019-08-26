- `npm install -g typescript ts-node` to install typescript compiler
- `npm init -y` to add `package.json`
- `ts-node index.ts` to compile and run
- `tsc index.ts` to compile `.ts`
- `node index.js` to run
- use `interface` to define the structure of an object:

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

- We can ignore object properties in `interface`
