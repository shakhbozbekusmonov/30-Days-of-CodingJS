"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 4 Condingbat Warmup 1
// ---------- Started ----------
// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false
function in1020(a, b) {
    return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
}
// console.log(in1020(12, 99)); // true
// console.log(in1020(21, 12)); // true
// console.log(in1020(8, 99)); // false
// ---------------------------------------------------
// hasTeen(13, 20, 10) → true
// hasTeen(20, 19, 10) → true
// hasTeen(20, 10, 13) → true
function hasTeen(a, b, c) {
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}
// console.log(hasTeen(13, 20, 10)); // true
// console.log(hasTeen(20, 19, 10)); // true
// console.log(hasTeen(20, 10, 13)); // true
// ---------------------------------------------------
//# sourceMappingURL=index.js.map