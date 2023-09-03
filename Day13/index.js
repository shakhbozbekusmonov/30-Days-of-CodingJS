"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 13 CondingJS String 2
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
//# sourceMappingURL=index.js.map