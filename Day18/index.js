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
//# sourceMappingURL=index.js.map