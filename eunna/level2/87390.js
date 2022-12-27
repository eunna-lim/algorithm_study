function solution(n, left, right) {
  var answer = [];

  const nums = Array.from({ length: n }, (v, i) => i + 1);

  for (let i = left; i <= right; i++) {
    const quotient = parseInt(i / n),
      remainder = parseInt(i % n);
    const num = quotient >= remainder ? nums[quotient] : nums[remainder];
    answer.push(num);
  }

  return answer;
}
