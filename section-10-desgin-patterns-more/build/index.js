"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var LinkedList_1 = __importDefault(require("./LinkedList"));
var numbersCollection = new NumbersCollection_1.default([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.default("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.default();
linkedList.add(100);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);
linkedList.sort();
linkedList.print();