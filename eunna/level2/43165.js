function solution(numbers, target) {
  var answer = 0;
  let stack = [[0, 0]];

  while (stack.length) {
    const [idx, acc] = stack.pop();

    if (idx < numbers.length) {
      stack.push([idx + 1, acc + numbers[idx]]);
      stack.push([idx + 1, acc - numbers[idx]]);
    }

    if (idx === numbers.length && acc === target) answer++;
  }

  return answer;
}
