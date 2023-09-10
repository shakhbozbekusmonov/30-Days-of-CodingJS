// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 17 CondingJS Login 1

// ---------- Started ----------

// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true

function in1To10(n: number, outsideMode: boolean): boolean {
	if (
		(n >= 1 && n <= 10 && !outsideMode) ||
		((n <= 1 || n >= 10) && outsideMode)
	)
		return true
	return false
}

//----------------------------------------------------------------

// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false

function specialEleven(n: number): boolean {
	return n % 11 === 0 || n % 11 === 1
}

//----------------------------------------------------------------

// more20(20) → false
// more20(21) → true
// more20(22) → true

function more20(n: number): boolean {
	return n % 20 === 1 || n % 20 === 2
}

//------------------------------------------------------------
