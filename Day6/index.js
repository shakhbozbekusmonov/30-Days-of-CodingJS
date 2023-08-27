"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 6 Condingbat Warmup 2
// ---------- Started ----------
// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi
// function stringTimes(str: string, n: number): string {
//     return str.repeat(n);
// }
function stringTimes(str, n) {
    let newStr = "";
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
}
// console.log(stringTimes("Hi", 2)); // HiHi
// console.log(stringTimes("Hi", 3)); // HiHiHi
// console.log(stringTimes("Hi", 1)); // Hi
// ---------------------------------------------
// frontTimes('Chocolate', 2) → ChoCho
// frontTimes('Chocolate', 3) → ChoChoCho
// frontTimes('Abc', 3) → AbcAbcAbc
function frontTimes(str, n) {
    return str.slice(0, 3).repeat(n);
}
// ---------------------------------------------
// countXX('abcxx') → 1
// countXX('xxx') → 2
// countXX('xxxx') → 3
function countXX(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str.substring(i, i + 2) === "xx") {
            count++;
        }
    }
    return count;
}
// -----------------------------------------
// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true
function doubleX(str) {
    let i = str.indexOf("x");
    return i === -1 ? false : str.substring(i + 1, i + 2) === "x";
}
// -----------------------------------------
// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello
function stringBits(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i += 2) {
        newStr += str.substring(i, i + 1);
    }
    return newStr;
}
// ------------------------------------------
// stringSplosion("Code") -> CCoCodCode
function stringSplosion(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += str.substring(0, i + 1);
    }
    return newStr;
}
// --------------- END ---------------
//# sourceMappingURL=index.js.map