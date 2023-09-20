// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 18 CondingJS Login 1

// ---------- Started ----------

// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true

function nearTen(num: number): boolean {
    return num % 10 < 3 || num % 10 >= 8;
}

//----------------------------------------------------------------
