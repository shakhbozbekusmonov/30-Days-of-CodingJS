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
