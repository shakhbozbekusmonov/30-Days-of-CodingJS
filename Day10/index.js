"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 10 CondingJS String 2
// ---------- Started ----------
// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true
function endOther(a, b) {
    if (a.length > b.length)
        return (a.toLowerCase().slice(-b.length) ===
            b.toLowerCase().slice(-b.length));
    if (a.length < b.length)
        return (a.toLowerCase().slice(-a.length) ===
            b.toLowerCase().slice(-a.length));
    return a.toLowerCase() === b.toLowerCase();
}
//----------------------------------------------------------------
// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true
function xyzThere(str) {
    if (str.length > 3) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== "." &&
                str.charAt(i + 1) === "x" &&
                str.charAt(i + 2) === "y" &&
                str.charAt(i + 3) === "z")
                return true;
        }
    }
    return str.startsWith("xyz") || false;
}
//-----------------------------------------------------------
// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false
function bobThere(str) {
    return str.match(/b[a-z|0-9]b/g) ? true : false;
}
//------------------------------------------------------------
//# sourceMappingURL=index.js.map