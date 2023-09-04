// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 14 CondingJS String 3

// ---------- Started ----------

// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str: string): boolean {
    let countIS: number = 0;
    let countNOT: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "i" && str.charAt(i + 1) === "s") {
            countIS++;
        }
        if (
            str.charAt(i) === "n" &&
            str.charAt(i + 1) === "o" &&
            str.charAt(i + 2) === "t"
        ) {
            countNOT++;
        }
    }
    return countIS === countNOT;
}

//-----------------------------------------------------------
