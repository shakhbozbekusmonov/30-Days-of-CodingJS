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

// teenSum(3, 4) → 7
// teenSum(10, 13) → 19
// teenSum(13, 2) → 19

function teenSum(a: number, b: number): number {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : a + b;
}

//----------------------------------------------------------------

// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false

function answerCell(
  isMorning: boolean,
  isMom: boolean,
  isAsleep: boolean
): boolean {
  if (isAsleep) return false;

  if (isMorning && !isMom) return false;

  return true;
}

//----------------------------------------------------------------
