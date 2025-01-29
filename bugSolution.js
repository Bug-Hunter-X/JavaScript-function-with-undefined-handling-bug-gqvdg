function foo(a, b) {
  if (a == null || b == null) {
    return null; //Corrected condition to handle both null and undefined
  }
  return a + b;
}

console.log(foo(1, null)); //null
console.log(foo(1, undefined)); //null