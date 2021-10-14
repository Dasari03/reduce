"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdraw = movements.filter((mov) => mov < 0);

console.log(withdraw);

const deposits = movements.filter((mov) => mov > 0);

console.log(deposits);

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

const biggestNum = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);

console.log(biggestNum);
