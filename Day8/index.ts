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

// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi

function left2(str: string): string {
    return str.slice(2) + str.slice(0, 2);
}

//---------------------------------------------

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str: string): string {
    return str.slice(-2) + str.slice(0, -2);
}

//--------------------------------------------

// theEnd('Hello', true) → H
// theEnd('Hello', false) → o
// theEnd('oh', true) → o

function theEnd(str: string, front: boolean): string {
    return front ? str.slice(0, 1) : str.slice(-1);
}

//--------------------------------------------

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →

function withoutEnd2(str: string): string {
    return str.slice(1, -1);
}

//--------------------------------------------

// middleTwo('string') → ri
// middleTwo('code') → od
// middleTwo('Practice') → ct

function middleTwo(str: string): string {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}

// --------------------------------------------

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false

function endsLy(str: string): boolean {
    return str.endsWith("ly");
}

//--------------------------------------------

// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce

function nTwice(str: string, n: number): string {
    return n > 0 ? str.slice(0, n) + str.slice(-n) : "";
}

//--------------------------------------------

// twoChar('java', 0) → ja
// twoChar('java', 2) → va
// twoChar('java', 3) → ja

function twoChar(str: string, index: number): string {
    return str.slice(index, index + 2).length === 2
        ? str.slice(index, index + 2)
        : str.slice(0, 2);
}

// ------------------------------------------

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str: string): string {
    return str.slice(str.length / 2 - 1, str.length / 2 + 2);
}

//--------------------------------------------

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str: string): boolean {
    return str.startsWith("bad") || str.startsWith("bad", 1);
}

//--------------------------------------------

// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@

function atFirst(str: string): string {
    return str.length >= 2
        ? str.slice(0, 2)
        : str.length === 0
        ? "@@"
        : str + "@";
}

//-------------------------------------------

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@

function lastChars(a: string, b: string): string {
    if (a.length === 0) a = "@";
    if (b.length === 0) b = "@";
    return a.slice(0, 1) + b.slice(-1);
}

//------------------------------------------------

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc

function conCat(a: string, b: string): string {
    return a.slice(-1) === b.slice(0, 1) ? a.slice(0, -1) + b : a + b;
}

//-------------------------------------------------

// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str: string): string {
    return (
        str.slice(0, -2) +
        str.slice(-1) +
        str.slice(str.length - 2, str.length - 1)
    );
}

//----------------------------------------------------

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str: string): string {
    return str.startsWith("red")
        ? str.slice(0, 3)
        : str.startsWith("blue")
        ? str.slice(0, 4)
        : "";
}

//--------------------------------------------

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str: string): boolean {
    return str.slice(0, 2) === str.slice(-2) && str.length > 1;
}

//--------------------------------------------

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a: string, b: string): string {
    if (a.length > b.length) a = a.slice(-b.length);
    if (a.length < b.length) b = b.slice(-a.length);
    return a.length === 0 || b.length === 0 ? "" : a + b;
}

//---------------------------------------------

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH

function extraFront(str: string): string {
    return str.substring(0, 2).repeat(3);
}

//--------------------------------------------

// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →

function without2(str: string): string {
    return str.slice(0, 2) === str.slice(-2) && str.length > 1
        ? str.slice(2)
        : str;
}

//--------------------------------------------
