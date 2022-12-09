import { open } from "node:fs/promises";

/* 
  A, B, C | X, Y, Z = Rock, Paper, Scissors
  Rock, Paper, Scissors => 1, 2, 3
  Win, Draw, Lose => 6, 3, 0
*/

const file = await open("./data.txt");
let points = 0;

for await (const line of file.readLines()) {
  const myChoice = line.charAt(2);
  const elfsChoice = line.charAt(0);
  const shapePoints =
    myChoice === "X" ? 1 : myChoice === "Y" ? 2 : 3;
  points += outcomeOfRound(myChoice, elfsChoice) + shapePoints;
}
console.log(points);



function outcomeOfRound(m, n) {
  if (m === 'X') {
    // Rock
    return n === 'A' ? 3 : n === 'B' ? 0 : 6;
  } else if (m === 'Y') {
    // Paper
    return n === 'A' ? 6 : n === 'B' ? 3 : 0;
  } else {
    // Scissors
    return n === 'A' ? 0 : n === 'B' ? 6 : 3;
  }
}

