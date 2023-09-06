"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 16 CondingJS Login 1
// ---------- Started ----------
// alarmClock(1, false) → 7:00
// alarmClock(5, false) → 7:00
// alarmClock(0, false) → 10:00
function alarmClock(day, vacation) {
    if (day > 0 && day <= 5 && !vacation) {
        return "7:00";
    }
    else if ((day <= 6 && !vacation) || (day > 0 && day <= 5 && vacation)) {
        return "10:00";
    }
    else {
        return "off";
    }
}
//----------------------------------------------------------------
// love6(6, 4) → true
// love6(4, 5) → false
// love6(1, 5) → true
function love6(a, b) {
    if (a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6) {
        return true;
    }
    else {
        return false;
    }
}
//---------------------------------------------------------------
//# sourceMappingURL=index.js.map