"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 13 CondingJS String 2 and 3
// ---------- Started ----------
// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy
function plusOut(str, word) {
    let newStr = "";
    let i = 0;
    while (i < str.length) {
        if (str.slice(i, i + word.length) === word) {
            newStr += word;
            i += word.length;
        }
        else {
            newStr += "+";
            i++;
        }
    }
    return newStr;
}
//----------------------------------------------------------------
// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11
function wordEnds(str, word) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + word.length) === word) {
            newStr += str.charAt(i - 1) + str.charAt(i + word.length);
        }
    }
    return newStr;
}
//----------------------------------------------------------------
// withoutString('Hello there', 'llo') → He there
// withoutString('Hello there', 'e') → Hllo thr
// withoutString('Hello there', 'x') → Hello there
function withoutString(base, remove) {
    let pattern = new RegExp(remove, "gi");
    return base.replaceAll(pattern, "");
}
//# sourceMappingURL=index.js.map