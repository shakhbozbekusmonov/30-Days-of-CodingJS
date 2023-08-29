// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 8 CondingJS String 1

// ---------- Started ----------

// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!

function helloName(name: string): string {
    return `Hello ${name}!`;
}

//-----------------------------------------

// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat

function makeAbba(a: string, b: string): string {
    return a + b + b + a;
}

//-----------------------------------------

// makeTags('i', 'Yay') → Yay
// makeTags('i', 'Hello') → Hello
// makeTags('cite', 'Yay') → Yay

function makeTags(tag: string, word: string): string {
    return `<${tag}>${word}</${tag}>`;
}

//-----------------------------------------

