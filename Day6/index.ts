// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 6 Condingbat Warmup 2

// ---------- Started ----------

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi

// function stringTimes(str: string, n: number): string {
//     return str.repeat(n);
// }

function stringTimes(str: string, n: number): string {
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
