"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 11 CondingJS String 2
// ---------- Started ----------
// sameStarChar('xy*yzz') → true
// sameStarChar('xy*zzz') → false
// sameStarChar('*xa*az') → true
function sameStarChar(str) {
    let found = true;
    for (let i = 0; i < str.length; i++) {
        let tmpStr = str.substring(i, i + 1);
        if (tmpStr === "*" && i > 0 && i < str.length - 1) {
            if (str.charAt(i - 1) === str.charAt(i + 1)) {
                found = true;
            }
            else {
                found = false;
            }
        }
    }
    return found;
}
// ---------- End ----------
//# sourceMappingURL=index.js.map