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
// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false
function loneTeen(a, b) {
    return ((a >= 13 && a <= 19 && (b < 13 || b > 19)) ||
        ((a < 13 || a > 19) && b >= 13 && b <= 19));
}
// console.log(loneTeen(13, 99)); // true
// console.log(loneTeen(21, 19)); // true
// console.log(loneTeen(13, 13)); // false
// console.log(loneTeen(99, 99)); // false
// ---------------------------------------------------
// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false
function mixStart(str) {
    return str.startsWith("ix", 1);
}
// console.log(mixStart('mix snacks')); // true
// console.log(mixStart('pix snacks')); // true
// console.log(mixStart('piz snacks')); // false
// ---------------------------------------------------
// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel
function delDel(str) {
    return str.startsWith("del", 1) ? str.slice(0, 1) + str.slice(4) : str;
}
// console.log(delDel('adelbc')); // abc
// console.log(delDel('adelHello')); // aHello
// console.log(delDel('abcdel')); // abcdel
// ---------------------------------------------------
// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o
function startOz(str) {
    if (str.startsWith("oz")) {
        return "oz";
    }
    else if (str.startsWith("o")) {
        return "o";
    }
    else if (str.startsWith("z", 1)) {
        return "z";
    }
    else {
        return "";
    }
}
// console.log(startOz("ozymandias")); // oz
// console.log(startOz("bzoo")); // z
// console.log(startOz("oxx")); // o
// console.log(startOz("abc")); // ""
// ---------------------------------------------
// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3
function intMax(a, b, c) {
    // return a > b && a > c ? a : b > a && b > c ? b : c;
    return Math.max(a, b, c);
}
// console.log(intMax(1, 2, 3)); // 3
// console.log(intMax(1, 3, 2)); // 3
// console.log(intMax(3, 2, 1)); // 3
// ----------------------------------------------
// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0
function close10(a, b) {
    return Math.abs(10 - a) < Math.abs(10 - b)
        ? a
        : Math.abs(10 - a) > Math.abs(10 - b)
            ? b
            : 0;
}
// console.log(close10(8, 13)); // 8
// console.log(close10(13, 8)); // 8
// console.log(close10(13, 7)); // 0
// ------------- END -----------------
//# sourceMappingURL=index.js.map