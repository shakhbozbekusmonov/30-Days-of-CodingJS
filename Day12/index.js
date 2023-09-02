"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 12 CondingJS String 2
// ---------- Started ----------
// oneTwo('abc') → bca
// oneTwo('tca') → cat
// oneTwo('tcagdo') → catdog
function oneTwo(str) {
    let newStr = "";
    for (let i = 0; i < str.length - 2; i += 3) {
        newStr += str.slice(i + 1, i + 3) + str.charAt(i);
    }
    return newStr;
}
//----------------------------------------------------------------
// zipZap('zipXzap') → zpXzp
// zipZap('zopzop') → zpzp
// zipZap('zzzopzop') → zzzpzp
function zipZap(str) {
    return str.replace(/z[a-z|A-Z]p/gi, "zp");
}
//----------------------------------------------------------------
// starOut('ab*cd') → ad
// starOut('ab**cd') → ad
// starOut('sm*eilly') → silly
function starOut(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str.charAt(i) !== "*") {
            newStr += str.charAt(i);
        }
        if (i > 0 && str.charAt(i) !== "*" && str.charAt(i - 1) !== "*") {
            newStr += str.charAt(i);
        }
        if (i > 0 && str.charAt(i) === "*" && str.charAt(i - 1) !== "*") {
            newStr = newStr.slice(0, -1);
        }
    }
    return newStr;
}
//---------------------------------------------------------------
//# sourceMappingURL=index.js.map