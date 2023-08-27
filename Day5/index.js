"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 4 Condingbat Warmup 1
// ---------- Started ----------
// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true
function in3050(a, b) {
    return ((a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
        (a >= 40 && a <= 50 && b >= 40 && b <= 50));
}
// console.log(in3050(30, 31)); // true
// console.log(in3050(30, 41)); // false
// console.log(in3050(40, 50)); // true
// ----------------------------------------------
// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11
function max1020(a, b) {
    if ((a >= 10 && a <= 20 && a > b) || (a >= 10 && a <= 20 && b > 20)) {
        return a;
    }
    else if ((b >= 10 && b <= 20 && b > a) ||
        (b >= 10 && b <= 20 && a > 20)) {
        return b;
    }
    else {
        return 0;
    }
}
// console.log(max1020(11, 19)); // 19
// console.log(max1020(19, 11)); // 19
// console.log(max1020(11, 9)); // 11
// --------------------------------------
//# sourceMappingURL=index.js.map