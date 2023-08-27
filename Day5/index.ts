// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 4 Condingbat Warmup 1
// ---------- Started ----------

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a: number, b: number): boolean {
    return (
        (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
        (a >= 40 && a <= 50 && b >= 40 && b <= 50)
    );
}

// console.log(in3050(30, 31)); // true
// console.log(in3050(30, 41)); // false
// console.log(in3050(40, 50)); // true

// ----------------------------------------------

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a: number, b: number): number {
    if ((a >= 10 && a <= 20 && a > b) || (a >= 10 && a <= 20 && b > 20)) {
        return a;
    } else if (
        (b >= 10 && b <= 20 && b > a) ||
        (b >= 10 && b <= 20 && a > 20)
    ) {
        return b;
    } else {
        return 0;
    }
}

// console.log(max1020(11, 19)); // 19
// console.log(max1020(19, 11)); // 19
// console.log(max1020(11, 9)); // 11

// --------------------------------------

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str: string): boolean {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "e") {
            count++;
        }
    }
    return count >= 1 && count <= 3;
}

// console.log(stringE("Hello")); // true
// console.log(stringE("Heelle")); // true
// console.log(stringE("Heelele")); // false

// --------------------------------------

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

function lastDigit(a: number, b: number): boolean {
    return a % 10 === b || b % 10 === a;
}

// console.log(lastDigit(7, 17)); // true
// console.log(lastDigit(6, 17)); // false
// console.log(lastDigit(3, 113)); // true

// --------------------------------------
