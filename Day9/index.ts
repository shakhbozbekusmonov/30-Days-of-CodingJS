// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 9 CondingJS String 1

// ---------- Started ----------

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str: string): string {
    let newStr = "";
    if (str.startsWith("a")) newStr += str.charAt(0);
    if (str.startsWith("b", 1)) newStr += str.charAt(1);
    newStr += str.slice(2);
    return newStr;
}

//----------------------------------------------------------------

// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h

function startWord(str: string, word: string): string {
    return str.slice(1, word.length) === word.slice(1)
        ? str.slice(0, 1) + word.slice(1)
        : "";
}

//---------------------------------------------------------------

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str: string): string {
    if (str.startsWith("x") && !str.endsWith("x")) return str.slice(1);
    if (!str.startsWith("x") && str.endsWith("x")) return str.slice(0, -1);
    if (str.startsWith("x") && str.endsWith("x")) return str.slice(1, -1);
    return str;
}

//-------------------------------------------------------------------------------

// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi

function withoutX2(str: string): string {
    let newStr = "";
    if (str.startsWith("x") && str.startsWith("x", 1)) {
        newStr += str.slice(2);
    } else if (str.startsWith("x") && !str.startsWith("x", 1)) {
        newStr += str.slice(1);
    } else if (!str.startsWith("x") && str.startsWith("x", 1)) {
        newStr += str.slice(0, 1) + str.slice(2);
    } else {
        newStr += str;
    }
    return newStr;
}

//-------------------------------------------------------------

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str: string): string {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += str[i] + str[i];
    }
    return newStr;
}

//-------------------------------------------------------------

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

function countHi(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "h" && str.charAt(i + 1) === "i") {
            count++;
        }
    }
    return count;
}

//-------------------------------------------------------------

// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true

function catDog(str: string): boolean {
    let catCount = 0;
    let dogCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) === "c" &&
            str.charAt(i + 1) === "a" &&
            str.charAt(i + 2) === "t"
        )
            catCount++;
        if (
            str.charAt(i) === "d" &&
            str.charAt(i + 1) === "o" &&
            str.charAt(i + 2) === "g"
        )
            dogCount++;
    }
    return catCount === dogCount;
}

//---------------------------------------------------------------------
