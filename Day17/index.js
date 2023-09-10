"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 17 CondingJS Login 1
// ---------- Started ----------
function in1To10(n, outsideMode) {
    if ((n >= 1 && n <= 10 && !outsideMode) ||
        ((n <= 1 || n >= 10) && outsideMode))
        return true;
    return false;
}
//----------------------------------------------------------------
//# sourceMappingURL=index.js.map