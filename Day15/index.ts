// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 15 CondingJS Login 1

// ---------- Started ----------

// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true

function cigarParty(cigars: number, isWeekend: boolean): boolean {
    return (
        (cigars >= 40 && cigars <= 60 && !isWeekend) ||
        (cigars >= 40 && isWeekend)
    );
}

//----------------------------------------------------------------
