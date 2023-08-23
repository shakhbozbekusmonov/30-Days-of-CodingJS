// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 2 Condingbat Warmup 1
// ---------- Started -----------------
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile: boolean, bSmile: boolean): boolean {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}

// console.log(monkeyTrouble(true, true)); // true
// console.log(monkeyTrouble(false, false)); // true
// console.log(monkeyTrouble(true, false)); // false
// console.log(monkeyTrouble(false, true)); // false

// --------------------------------

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(a: number, b: number): number {
    return a === b ? (a + b) * 2 : a + b;
}

// console.log(sumDouble(1, 2)) // 3
// console.log(sumDouble(3, 2)) // 5
// console.log(sumDouble(2, 2)) // 8

// -------------------------------------

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n: number): number {
    return n > 21 ? Math.abs(n - 21) * 2 : Math.abs(n - 21);
}

console.log(diff21(19)); // 2
console.log(diff21(10)); // 11
console.log(diff21(21)); // 0
console.log(diff21(23)); // 4
