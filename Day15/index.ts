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

// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

function dateFashion(you: number, date: number): number {
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
