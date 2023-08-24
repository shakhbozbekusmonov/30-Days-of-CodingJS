// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 3 Condingbat Warmup 1
// ---------- Started -----------------
// makes10(9, 10) → true
// makes10(9, 9) → false
// makes10(1, 9) → true

function makes10(a: number, b: number): boolean {
    return a === 10 || b === 10 || a + b === 10;
}

// console.log(makes10(9, 10)); // true
// console.log(makes10(9, 9)); // false
// console.log(makes10(1, 9)); // true

// ------------------------------------

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

function nearHundred(n: number): boolean {
    return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}

// console.log(nearHundred(93)); // true
// console.log(nearHundred(90)); // true
// console.log(nearHundred(89)); // false

// ------------------------------------

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(a: number, b: number, negative: boolean): boolean {
    return (
        (a < 0 && b > 0) ||
        (a > 0 && b < 0 && !negative) ||
        (a < 0 && b < 0 && negative)
    );
}

// console.log(posNeg(1, -1, false)); // true
// console.log(posNeg(-1, 1, false)); // true
// console.log(posNeg(-4, -5, true)); // true

// ------------------------------------------

// notString("candy") → "not candy"
// notString("x") → "not x"
// notString("not bad") → "not bad"

function notString(str: string): string {
    return str.startsWith("not") ? str : "not " + str;
}

// console.log(notString("candy")); // not candy
// console.log(notString("x")); // not x
// console.log(notString("not bad")); // not bad

// ------------------------------------------

// missingChar("kitten", 1) → "ktten"
// missingChar("kitten", 0) → "itten"
// missingChar("kitten", 4) → "kittn"

function missingChar(str: string, n: number): string {
    return str.slice(0, n) + str.slice(n + 1);
}

// console.log(missingChar("kitten", 1)); // ktten
// console.log(missingChar("kitten", 0)); // itten
// console.log(missingChar("kitten", 4)); // kittn
// console.log(missingChar("kitten", 5)); // kitte

// ------------------------------------------
