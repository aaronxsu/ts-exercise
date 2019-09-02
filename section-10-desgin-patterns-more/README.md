- `npm install -g typescript ts-node` to install typescript compiler
- `tsc --init` generates a `tsconfig.json`
- modify below:

```json
"outDir": "./build" /* Redirect output structure to the directory. */,
"rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
```

- `tsc -w` compile and watch
- `npm init -y` to generate `package.json`
- `npm install nodemon concurrently`
  - `nodemon` is to rerun node everytime a file changes, it will execute code once it is compiled
  - `concurrently` is for running multiple scripts at the same time
- update below to `package.json`

```json
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "cocurrently npm:start:*"
  }
```

The last line is to run all npm script that is keyed with `start:*`

- Type guards: TS can use this to restore access to methods if `this.collection` is of a union type

```ts
collecton: number[] | string
...
if (this.collection instanceof Array) {...}
if (typeof this.colleciton === 'string') {...}
```

- Narrow type pf a valye to a promitive type:

```
typeof -> number, string, boolean, symbol
```

- Narrow down every other type of value

```
instanceof -> every other value that is created with a contructor function
```

- Abstract class:
  - Cannot be used to create an object directly
  - Only used as a parent class
  - Can contain only real implementation for some methods
  - The implemented methofs can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
  - Can make child classes promise to implment some other methods

* Interfaces v.s. Inheritance/Abstract Classes:
  - Interfaces
    - Sets up a contract between different classes
    - Use when we have very difficult objects that we want to work together
    - Promotes loose coupling
  - Inheritance/Abstract Classes
    - Sets up a contract between different classes
    - Use when we are trying to build up a definition of an object
    - Strongly couples classes together
