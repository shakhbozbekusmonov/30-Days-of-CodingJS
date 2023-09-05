"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 15 CondingJS Login 1
// ---------- Started ----------
// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true
function cigarParty(cigars, isWeekend) {
    return ((cigars >= 40 && cigars <= 60 && !isWeekend) ||
        (cigars >= 40 && isWeekend));
}
//----------------------------------------------------------------
// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1
function dateFashion(you, date) {
    // if ((you > 5 && date >= 5) || (you >= 5 && date > 5)) {
    //     return 2;
    // } else if (you > 2 && date > 2) {
    //     return 1;
    // } else {
    //     return 0;
    // }
    return (you > 5 && date >= 5) || (you >= 5 && date > 5)
        ? 2
        : you > 2 && date > 2
            ? 1
            : 0;
}
//----------------------------------------------------------------
// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true
function squirrelPlay(temp, isSummer) {
    return ((temp >= 60 && temp <= 90 && !isSummer) ||
        (temp >= 60 && temp <= 100 && isSummer));
}
//---------------------------------------------------------------
// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0
function caughtSpeeding(speed, isBirthday) {
    if ((speed >= 61 && speed <= 81 && !isBirthday) ||
        (speed > 65 && isBirthday)) {
        return 1;
    }
    else if (speed > 81 && !isBirthday) {
        return 2;
    }
    else {
        return 0;
    }
}
//---------------------------------------------------------------
//# sourceMappingURL=index.js.map