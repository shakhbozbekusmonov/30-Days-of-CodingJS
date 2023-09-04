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

// gHappy('xxggxx') → true
// gHappy('xxgxx') → false
// gHappy('xxggyygxx') → false

function gHappy(str: string): boolean {
    let happy: boolean = true;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "g") {
            if (i > 0 && str.charAt(i - 1) === "g") {
                happy = true;
            } else if (i < str.length - 1 && str.charAt(i + 1) === "g") {
                happy = true;
            } else {
                happy = false;
            }
        }
    }
    return happy;
}

//---------------------------------------------------------------

// countTriple('abcXXXabc') → 1
// countTriple('xxxabyyyycd') → 3
// countTriple('a') → 0

function countTriple(str: string): number {
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) === str.charAt(i + 1) &&
            str.charAt(i + 1) === str.charAt(i + 2)
        )
            count++;
    }
    return count;
}

//------------------------------------------------------------------------

// sumDigits('aa1bc2d3') → 6
// sumDigits('aa11b33') → 8
// sumDigits('Chocolate') → 0

function sumDigits(str: string): number {
    return str
        .split("")
        .filter((item) => !isNaN(Number(item)))
        .reduce((acc, num) => acc + Number(num), 0);
}

// function sumDigits(str: string): number {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(Number(str.charAt(i)))) {
//             sum += Number(str.charAt(i));
//         }
//     }
//     return sum;
// }

//------------------------------------------------------------------------

// sameEnds('abXYab') → true
// sameEnds('xx') → true
// sameEnds('xxx') → true

function sameEnds(nums: string, len: number): boolean {
    return nums.slice(0, len) === nums.slice(-len);
}

//-----------------------------------------------------------------------

// mirrorEnds('abXYZba') → ab
// mirrorEnds('abca') → a
// mirrorEnds('aba') → aba

function mirrorEnds(string: string): string {
    let newStr: string = "";
    let len: number = string.length;
    for (let i = 0; i < len; i++) {
        if (string.charAt(i) === string.charAt(len - 1 - i)) {
            newStr += string.charAt(i);
        } else {
            return newStr;
        }
    }
    return newStr;
}

//-------------------------------------------------------------------

// maxBlock('hoopla') → 2
// maxBlock('abbCCCddBBBxx') → 3
// maxBlock('') → 0

function maxBlock(str: string): number {
    const matches: RegExpMatchArray | null = str.match(/(.)\1*/g);

    if (!matches) {
        return 0;
    }

    const maxLength: number = Math.max(...matches.map((match) => match.length));

    return maxLength;
}

//-------------------------------------------------------------------
