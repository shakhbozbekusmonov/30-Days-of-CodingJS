"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 8 CondingJS String 1
// ---------- Started ----------
// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!
function helloName(name) {
    return `Hello ${name}!`;
}
//-----------------------------------------
// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat
function makeAbba(a, b) {
    return a + b + b + a;
}
//-----------------------------------------
// makeTags('i', 'Yay') → Yay
// makeTags('i', 'Hello') → Hello
// makeTags('cite', 'Yay') → Yay
function makeTags(tag, word) {
    return `<${tag}>${word}</${tag}>`;
}
//-----------------------------------------
// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]
function makeOutWord(out, word) {
    return out.slice(0, out.length / 2) + word + out.slice(out.length / 2);
}
//----------------------------------------
// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi
function extraEnd(str) {
    return str.slice(-2).repeat(3);
}
//-----------------------------------------
// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab
function firstTwo(str) {
    return str.substring(0, 2);
}
//----------------------------------------
// firstHalf('WooHoo') → Woo
// firstHalf('HelloThere') → Hello
// firstHalf('abcdefg') → abc
function firstHalf(str) {
    return str.substring(0, str.length / 2);
}
//-------------------------------------------
//# sourceMappingURL=index.js.map