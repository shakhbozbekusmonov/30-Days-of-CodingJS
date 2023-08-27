// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 4 Condingbat Warmup 1
// ---------- Started ----------

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a: number, b: number): boolean {
    return (
        (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
        (a >= 40 && a <= 50 && b >= 40 && b <= 50)
    );
}

// console.log(in3050(30, 31)); // true
// console.log(in3050(30, 41)); // false
// console.log(in3050(40, 50)); // true

// ----------------------------------------------
