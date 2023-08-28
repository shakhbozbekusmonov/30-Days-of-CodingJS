// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 7 Condingbat Warmup 2

// ---------- Started ----------

// last2('hixxhi') → 1
// last2('xaxxaxaxx') → 1
// last2('axxaaxx') → 1

function last2(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (
            str.slice(str.length - 2).localeCompare(str.slice(i, i + 2)) === 0
        ) {
            count++;
        }
    }
    return count;
}

// ---------------------------------------

// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3

function arrayCount9(nums: number[]): number {
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

function arrayFront9(nums: number[]): boolean {
    let newArr = nums.slice(0, 4);
    return newArr.includes(9) && newArr.length !== 0;
}

// -------------------------------------------

function array123(nums: number[]): boolean {
    if (nums.length !== 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] === 1 && nums[j] === 2 && nums[k] === 3) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    return false;
}

// -------------------------------------------
