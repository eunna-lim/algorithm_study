function count(stringArr) {
  const OPEN = ["[", "(", "{"];
  const MAPPING = { "]": "[", ")": "(", "}": "{" };

  const stack = [];
  let count = 0;

  for (let s of stringArr) {
    if (OPEN.includes(s)) stack.push(s);
    else if (stack[stack.length - 1] === MAPPING[s]) {
      stack.pop();
      if (!stack.length) count += 1;
    } else return 0;
  }

  return stack.length ? 0 : count;
}

function solution(s) {
  const stringArr = s.split("");
  const { length } = stringArr;
  let idx = 0;

  while (idx < length) {
    const cnt = count(stringArr);
    if (cnt) return cnt;

    stringArr.push(stringArr.shift());
    idx += 1;
  }

  return 0;
}

console.log(solution("()("));
