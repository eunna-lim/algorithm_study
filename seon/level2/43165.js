function solution(numbers, target) {
  if (numbers.length === 1) {
    if (numbers[0] === target || numbers[0] === -target) return 1;
    else return 0;
  }

  const number = numbers.shift();

  return (
    solution([...numbers], target + number) +
    solution([...numbers], target - number)
  );
}
