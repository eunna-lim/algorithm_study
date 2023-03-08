function calculate(targetSet, setA, setB) {
  for (let numA of setA) {
    for (let numB of setB) {
      targetSet.add(numA + numB);
      targetSet.add(numA - numB);
      targetSet.add(numA * numB);
      targetSet.add(Math.floor(numA / numB));
    }
  }
}

function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(`${N}`.repeat(i)));

    for (let x = 1; x < i; x++) {
      const y = i - x;
      calculate(dp[i], dp[x], dp[y]);
    }

    if (dp[i].has(number)) return i;
  }

  return -1;
}

console.log(solution(5, 12));
