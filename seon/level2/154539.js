function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);

  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
  }

  return answer;
}

console.log(solution([9, 1, 5, 3, 6, 2]));
