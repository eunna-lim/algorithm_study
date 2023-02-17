function solution(n, roads, sources, destination) {
  var answer = [];
  const conn = Array.from({ length: n + 1 }, () => []);
  roads.forEach(([a, b]) => {
    conn[a].push(b);
    conn[b].push(a);
  });

  let distances = Array(n + 1).fill(-1);
  distances = bfs(destination, conn, distances);
  answer = sources.map((source) => distances[source]);
  return answer;
}

function bfs(dest, conn, distances) {
  const queue = [dest];
  distances[dest] = 0;

  while (queue.length) {
    const node = queue.shift();
    conn[node].forEach((next) => {
      if (distances[next] === -1) {
        queue.push(next);
        distances[next] = distances[node] + 1;
      }
    });
  }
  return distances.slice();
}
