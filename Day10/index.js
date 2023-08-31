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
//# sourceMappingURL=index.js.map