"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 2 Condingbat Warmup 1
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}
// console.log(monkeyTrouble(true, true)); // true
// console.log(monkeyTrouble(false, false)); // true
// console.log(monkeyTrouble(true, false)); // false
// console.log(monkeyTrouble(false, true)); // false
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8
function sumDouble(a, b) {
    return a === b ? (a + b) * 2 : a + b;
}
console.log(sumDouble(1, 2)); // 3
console.log(sumDouble(3, 2)); // 5
console.log(sumDouble(2, 2)); // 8
//# sourceMappingURL=index.js.map