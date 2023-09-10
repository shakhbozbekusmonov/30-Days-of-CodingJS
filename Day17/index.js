"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 17 CondingJS Login 1
// ---------- Started ----------
// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true
function in1To10(n, outsideMode) {
    if ((n >= 1 && n <= 10 && !outsideMode) ||
        ((n <= 1 || n >= 10) && outsideMode))
        return true;
    return false;
}
//----------------------------------------------------------------
// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false
function specialEleven(n) {
    return n % 11 === 0 || n % 11 === 1;
}
//----------------------------------------------------------------
// more20(20) → false
// more20(21) → true
// more20(22) → true
function more20(n) {
    return n % 20 === 1 || n % 20 === 2;
}
//------------------------------------------------------------
// old35(3) → true
// old35(10) → true
// old35(15) → false
function old35(n) {
    return (n % 3 === 0 && n % 5 !== 0) || (n % 5 === 0 && n % 3 !== 0);
}
//------------------------------------------------------------
// less20(18) → true
// less20(19) → true
// less20(20) → false
function less20(n) {
    let less = Math.abs((n % 20) - 20);
    return less === 2 || less === 1;
}
//------------------------------------------------------------
//# sourceMappingURL=index.js.map