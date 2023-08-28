"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 7 Condingbat Warmup 2
// ---------- Started ----------
// last2('hixxhi') → 1
// last2('xaxxaxaxx') → 1
// last2('axxaaxx') → 1
function last2(str) {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (str.slice(str.length - 2).localeCompare(str.slice(i, i + 2)) === 0) {
            count++;
        }
    }
    return count;
}
// ---------------------------------------
// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3
function arrayCount9(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 9) {
            count++;
        }
    }
    return count;
}
//------------------------------------------
// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false
function arrayFront9(nums) {
    let newArr = nums.slice(0, 4);
    return newArr.includes(9) && newArr.length !== 0;
}
// -------------------------------------------
function array123(nums) {
    if (nums.length !== 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] === 1 && nums[j] === 2 && nums[k] === 3) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
    return false;
}
// -------------------------------------------
// stringMatch('xxcaazz', 'xxbaaz') → 3
// stringMatch('abc', 'abc') → 2
// stringMatch('abc', 'axc') → 0
function stringMatch(a, b) {
    let count = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a.substring(i, i + 2) === b.substring(i, i + 2))
            count++;
    }
    return count;
}
// -----------------------------------------------
// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx
function stringX(str) {
    let newStr = str.slice(0, 1);
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] !== "x") {
            newStr += str[i];
        }
    }
    return newStr + str.slice(-1);
}
// -----------------------------------------------
// altPairs('kitten') → kien
// altPairs('Chocolate') → Chole
// altPairs('CodingHorror') → Congrr
function altPairs(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i += 4) {
        newStr += str.charAt(i);
        if (i + 1 < str.length) {
            newStr += str.charAt(i + 1);
        }
    }
    return newStr;
}
// ---------------------------------------------
// stringYak('yakpak') → pak
// stringYak('pakyak') → pak
// stringYak('yak123ya') → 123ya
function stringYak(str) {
    return str.replace(/yak/gi, "");
}
// --------------------------------------------
// array667([6,6,2]) → 1
// array667([6,6,2,6]) → 1
// array667([6,7,2,6]) → 1
function array667(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] === 6 && nums[i + 1]) === 6 ||
            (nums[i] === 6 && nums[i + 1] === 7))
            count++;
    }
    return count;
}
// -----------------------------------------
// noTriples([1,1,2,2,1]) → true
// noTriples([1,1,2,2,2,1]) → false
// noTriples([1,1,2,2,2,1]) → false
function noTriples(nums) {
    if (nums.length < 3)
        return true;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
            return false;
        }
    }
    return true;
}
//-----------------------------------------
// has271([1,2,7,1]) → true
// has271([1,2,8,1]) → false
// has271([2,7,1]) → true
function has271(nums) {
    if (nums.length < 3)
        return false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 2 && nums[i + 1] === 7 && nums[i + 2] === 1)
            return true;
    }
    return false;
}
//----------------- END --------------------
//# sourceMappingURL=index.js.map