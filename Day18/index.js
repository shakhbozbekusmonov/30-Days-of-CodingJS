"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 18 CondingJS Login 1
// ---------- Started ----------
// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true
function nearTen(num) {
    return num % 10 < 3 || num % 10 >= 8;
}
//----------------------------------------------------------------
// teenSum(3, 4) → 7
// teenSum(10, 13) → 19
// teenSum(13, 2) → 19
function teenSum(a, b) {
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : a + b;
}
//----------------------------------------------------------------
// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false
function answerCell(isMorning, isMom, isAsleep) {
    if (isAsleep)
        return false;
    if (isMorning && !isMom)
        return false;
    return true;
}
//----------------------------------------------------------------
// teaParty(6, 8) → 1
// teaParty(3, 8) → 0
// teaParty(20, 6) → 2
function teaParty(tea, candy) {
    if (tea < 5 || candy < 5)
        return 0;
    if (tea >= 2 * candy || candy >= 2 * tea)
        return 2;
    else
        return 1;
}
//---------------------------------------------------------------
// fizzString('fig') → Fizz
// fizzString('dib') → Buzz
// fizzString('fib') → FizzBuzz
function fizzString(str) {
    let newStr = "";
    if (str.startsWith("f"))
        newStr += "Fizz";
    if (str.endsWith("b"))
        newStr += "Buzz";
    return newStr || str;
}
//--------------------------------------------------------------
//# sourceMappingURL=index.js.map