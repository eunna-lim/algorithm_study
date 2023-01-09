function solution(k, tangerine) {
  const sizes = {};

  tangerine.forEach((size) => (sizes[size] = (sizes[size] || 0) + 1));

  const numbers = Object.values(sizes).sort((a, b) => a - b);

  let answer = 0;
  while (k > 0) {
    k -= numbers.pop();
    answer++;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
