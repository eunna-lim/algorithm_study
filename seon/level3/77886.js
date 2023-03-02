function solution(s) {
  const ONE_ONE_ZERO = "110";
  const ONE = "1";
  const ZERO = "0";
  const answer = [];

  s.forEach((x) => {
    if (x.length < 3) {
      answer.push(x);
      return;
    }

    x = x.split("");
    const stack = [x[0], x[1]];
    let count = 0;
    for (let i = 2; i < x.length; i++) {
      if (x[i] === ZERO && stack[stack.length - 1] === ONE && stack[stack.length - 2] === ONE) {
        stack.pop();
        stack.pop();
        count += 1;
      } else {
        stack.push(x[i]);
      }
    }

    let index = stack.length;
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === ONE) index = i;
      else break;
    }

    answer.push(stack.slice(0, index).join("") + ONE_ONE_ZERO.repeat(count) + stack.slice(index).join(""));
  });

  return answer;
}
