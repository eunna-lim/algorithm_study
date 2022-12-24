function solution(n, s, a, b, fares) {
  const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) graph[i][i] = 0;

  fares.forEach(([a, b, fare]) => {
    graph[a][b] = fare;
    graph[b][a] = fare;
  });

  for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
      for (let b = 1; b <= n; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  let answer = Infinity;
  for (let i = 1; i <= n; i++)
    answer = Math.min(graph[s][i] + graph[a][i] + graph[b][i], answer);

  return answer;
}
