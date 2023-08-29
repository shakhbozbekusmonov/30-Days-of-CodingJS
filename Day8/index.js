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
//# sourceMappingURL=index.js.map