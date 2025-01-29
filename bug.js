function foo(a, b) {
  if (a === null || b === null) {
    return null; //This condition will not cover the case when one of them is undefined
  }
  return a + b;
}

console.log(foo(1, null)); //null
console.log(foo(1, undefined)); //NaN