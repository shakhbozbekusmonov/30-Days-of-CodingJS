"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 14 CondingJS String 3
// ---------- Started ----------
// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true
function equalIsNot(str) {
    let countIS = 0;
    let countNOT = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "i" && str.charAt(i + 1) === "s") {
            countIS++;
        }
        if (str.charAt(i) === "n" &&
            str.charAt(i + 1) === "o" &&
            str.charAt(i + 2) === "t") {
            countNOT++;
        }
    }
    return countIS === countNOT;
}
//-----------------------------------------------------------
// gHappy('xxggxx') → true
// gHappy('xxgxx') → false
// gHappy('xxggyygxx') → false
function gHappy(str) {
    let happy = true;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "g") {
            if (i > 0 && str.charAt(i - 1) === "g") {
                happy = true;
            }
            else if (i < str.length - 1 && str.charAt(i + 1) === "g") {
                happy = true;
            }
            else {
                happy = false;
            }
        }
    }
    return happy;
}
//---------------------------------------------------------------
// countTriple('abcXXXabc') → 1
// countTriple('xxxabyyyycd') → 3
// countTriple('a') → 0
function countTriple(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i + 1) &&
            str.charAt(i + 1) === str.charAt(i + 2))
            count++;
    }
    return count;
}
//------------------------------------------------------------------------
// sumDigits('aa1bc2d3') → 6
// sumDigits('aa11b33') → 8
// sumDigits('Chocolate') → 0
function sumDigits(str) {
    return str
        .split("")
        .filter((item) => !isNaN(Number(item)))
        .reduce((acc, num) => acc + Number(num), 0);
}
// function sumDigits(str: string): number {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(Number(str.charAt(i)))) {
//             sum += Number(str.charAt(i));
//         }
//     }
//     return sum;
// }
//------------------------------------------------------------------------
// sameEnds('abXYab') → true
// sameEnds('xx') → true
// sameEnds('xxx') → true
function sameEnds(nums, len) {
    return nums.slice(0, len) === nums.slice(-len);
}
//-----------------------------------------------------------------------
// mirrorEnds('abXYZba') → ab
// mirrorEnds('abca') → a
// mirrorEnds('aba') → aba
function mirrorEnds(string) {
    let newStr = "";
    let len = string.length;
    for (let i = 0; i < len; i++) {
        if (string.charAt(i) === string.charAt(len - 1 - i)) {
            newStr += string.charAt(i);
        }
        else {
            return newStr;
        }
    }
    return newStr;
}
//-------------------------------------------------------------------
// maxBlock('hoopla') → 2
// maxBlock('abbCCCddBBBxx') → 3
// maxBlock('') → 0
function maxBlock(str) {
    const matches = str.match(/(.)\1*/g);
    if (!matches) {
        return 0;
    }
    const maxLength = Math.max(...matches.map((match) => match.length));
    return maxLength;
}
//-------------------------------------------------------------------
// sumNumbers('abc123xyz') → 123
// sumNumbers('aa11b33') → 44
// sumNumbers('7 11') → 18
function sumNumbers(str) {
    let regexp = /\d+/g;
    let sum = 0;
    let matches = str.match(regexp);
    if (matches)
        sum = matches.reduce((acc, num) => acc + Number(num), 0);
    return sum;
}
//------------------------------------------------------------------
//# sourceMappingURL=index.js.map