// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 13 CondingJS String 2 and 3

// ---------- Started ----------

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

function plusOut(str: string, word: string): string {
    let newStr: string = "";
    let i: number = 0;
    while (i < str.length) {
        if (str.slice(i, i + word.length) === word) {
            newStr += word;
            i += word.length;
        } else {
            newStr += "+";
            i++;
        }
    }
    return newStr;
}

//----------------------------------------------------------------

// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11

function wordEnds(str: string, word: string): string {
    let newStr: string = "";
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + word.length) === word) {
            newStr += str.charAt(i - 1) + str.charAt(i + word.length);
        }
    }
    return newStr;
}

//----------------------------------------------------------------

// countYZ('fez day') → 2
// countYZ('day fez') → 2
// countYZ('day fyyyz') → 2

function countYZ(str: string): number {
    let count = 0;
    const words = str.toLowerCase().split(/[^a-z]+/);

    for (const word of words) {
        if (word.endsWith("y") || word.endsWith("z")) {
            count++;
        }
    }
    return count;
}

//----------------------------------------------------------

// withoutString('Hello there', 'llo') → He there
// withoutString('Hello there', 'e') → Hllo thr
// withoutString('Hello there', 'x') → Hello there

function withoutString(base: string, remove: string): string {
    let pattern = new RegExp(remove, "gi");
    return base.replaceAll(pattern, "");
}

//----------------------------------------------------------------
