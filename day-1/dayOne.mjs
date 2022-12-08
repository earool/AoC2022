// Added two newlines at the end of data.txt file

import { open } from "node:fs/promises";

const file = await open("./data.txt");
const allItems = [];
let oneElfsItems = [];

for await (const line of file.readLines()) {
  if (line === "") {
    allItems.push(oneElfsItems);
    oneElfsItems = [];
  } else {
    oneElfsItems.push(line);
  }
}

const sum = allItems.map((items) => {
  return items.reduce((prev, curr) => +prev + +curr);
});

const max = sum.reduce((prev, curr) => {
  return curr > prev ? curr : prev;
});

console.log(max);
