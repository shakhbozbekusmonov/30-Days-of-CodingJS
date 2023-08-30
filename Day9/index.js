"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 9 CondingJS String 1
// ---------- Started ----------
// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay
function deFront(str) {
    let newStr = "";
    if (str.startsWith("a"))
        newStr += str.charAt(0);
    if (str.startsWith("b", 1))
        newStr += str.charAt(1);
    newStr += str.slice(2);
    return newStr;
}
//----------------------------------------------------------------
//# sourceMappingURL=index.js.map