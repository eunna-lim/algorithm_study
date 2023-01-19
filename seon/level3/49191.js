function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(null));

  results.forEach(([winner, loser]) => {
    graph[winner][loser] = 1;
    graph[loser][winner] = 0;
  });

  for (let player = 1; player <= n; player++) {
    const winners = [];
    const losers = [];

    graph[player].forEach((result, idx) => {
      if (result === 0) winners.push(idx);
      else if (result === 1) losers.push(idx);
    });

    losers.forEach((loser) => {
      winners.forEach((winner) => {
        graph[loser][winner] = 0;
        graph[winner][loser] = 1;
      });
    });
  }

  let answer = 0;
  graph.forEach((arr) => {
    let countZero = 0;
    let countOne = 0;
    arr.forEach((num) => {
      if (num === 0) countZero++;
      else if (num === 1) countOne++;
    });
    if (countOne + countZero === n - 1) answer += 1;
  });

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
