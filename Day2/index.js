"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 2 Condingbat Warmup 1
// ---------- Started -----------------
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
// --------------------------------
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8
function sumDouble(a, b) {
    return a === b ? (a + b) * 2 : a + b;
}
// console.log(sumDouble(1, 2)) // 3
// console.log(sumDouble(3, 2)) // 5
// console.log(sumDouble(2, 2)) // 8
// -------------------------------------
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
function diff21(n) {
    return n > 21 ? Math.abs(n - 21) * 2 : Math.abs(n - 21);
}
// console.log(diff21(19)); // 2
// console.log(diff21(10)); // 11
// console.log(diff21(21)); // 0
// console.log(diff21(23)); // 4
// -------------------------------------
// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false
function parrotTrouble(talking, hour) {
    return talking && (hour < 7 || hour > 20);
}
// console.log(parrotTrouble(true, 6)); // true
// console.log(parrotTrouble(true, 7)); // false
// console.log(parrotTrouble(false, 6)); // false
// console.log(parrotTrouble(true, 21)); // true
// --------------- End -------------------
//# sourceMappingURL=index.js.map