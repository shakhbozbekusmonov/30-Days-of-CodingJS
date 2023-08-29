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

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]

function makeOutWord(out: string, word: string): string {
    return out.slice(0, out.length / 2) + word + out.slice(out.length / 2);
}

//----------------------------------------

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi

function extraEnd(str: string): string {
    return str.slice(-2).repeat(3);
}

//-----------------------------------------

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab

function firstTwo(str: string): string {
    return str.substring(0, 2);
}

//----------------------------------------

// firstHalf('WooHoo') → Woo
// firstHalf('HelloThere') → Hello
// firstHalf('abcdefg') → abc

function firstHalf(str: string): string {
    return str.substring(0, str.length / 2);
}

//-------------------------------------------

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str: string): string {
    return str.slice(1, -1);
}

//--------------------------------------------

// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab

function comboString(a: string, b: string): string {
    return a.length > b.length ? b + a + b : a + b + a;
}

//---------------------------------------------

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a: string, b: string): string {
    return a.substring(1) + b.substring(1);
}

//---------------------------------------------