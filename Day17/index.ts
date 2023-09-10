// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 17 CondingJS Login 1

// ---------- Started ----------

function in1To10(n: number, outsideMode: boolean): boolean {
	if (
		(n >= 1 && n <= 10 && !outsideMode) ||
		((n <= 1 || n >= 10) && outsideMode)
	)
		return true
	return false
}

//----------------------------------------------------------------
