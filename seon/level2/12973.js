function solution(string) {
  const stack = [];
  const arr = string.split("");

  arr.forEach((s) => {
    if (stack[stack.length - 1] === s) stack.pop();
    else stack.push(s);
  });

  return !stack.length ? 1 : 0;
}
