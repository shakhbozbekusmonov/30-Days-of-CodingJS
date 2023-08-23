"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 2 Condingbat Warmup 1
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}
console.log(monkeyTrouble(true, true)); // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false)); // false
console.log(monkeyTrouble(false, true)); // false
//# sourceMappingURL=index.js.map