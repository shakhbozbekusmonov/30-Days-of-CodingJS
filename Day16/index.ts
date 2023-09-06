// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 16 CondingJS Login 1

// ---------- Started ----------

// alarmClock(1, false) → 7:00
// alarmClock(5, false) → 7:00
// alarmClock(0, false) → 10:00

function alarmClock(day: number, vacation: boolean): string {
    if (day > 0 && day <= 5 && !vacation) {
        return "7:00";
    } else if ((day <= 6 && !vacation) || (day > 0 && day <= 5 && vacation)) {
        return "10:00";
    } else {
        return "off";
    }
}

//----------------------------------------------------------------
