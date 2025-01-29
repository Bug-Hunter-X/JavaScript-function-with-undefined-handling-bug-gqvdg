# JavaScript Function with Undefined Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript function handling undefined values. The function `foo` aims to add two numbers but doesn't correctly handle cases where either `a` or `b` is `undefined`.

## Bug
The `bug.js` file contains the buggy implementation.  The function only explicitly checks for `null` values, leading to `NaN` when an argument is `undefined`.

## Solution
The `bugSolution.js` file provides a corrected version.  It checks for both `null` and `undefined` using loose equality (==) or strict equality (===), ensuring the function returns `null` in all cases where either input is nullish.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` to see the original buggy behavior.
3. Run `node bugSolution.js` to see the corrected behavior.