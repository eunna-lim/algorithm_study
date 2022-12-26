function solution(n, s, a, b, fares) {
  var answer = Number.MAX_SAFE_INTEGER;
  let connection = {};
  fares.forEach((fare) => {
    const [ver1, ver2, cost] = fare;
    connection[ver1]
      ? connection[ver1].push([ver2, cost])
      : (connection[ver1] = [
          [ver1, 0],
          [ver2, cost],
        ]);
    connection[ver2]
      ? connection[ver2].push([ver1, cost])
      : (connection[ver2] = [
          [ver2, 0],
          [ver1, cost],
        ]);
  });

  // min(s-환승 비용 + 환승-a 비용 + 환승-b 비용)
  // 최소 비용 -> dijkstra 알고리즘 사용
  let costs = {
    A: Array(n + 1).fill(Number.MAX_SAFE_INTEGER),
    B: Array(n + 1).fill(Number.MAX_SAFE_INTEGER),
    S: Array(n + 1).fill(Number.MAX_SAFE_INTEGER),
  };

  function dijkstra(start, char) {
    let pq = [[start, 0]];

    while (pq.length) {
      const [current, cost] = pq[0];
      pq.shift();

      if (costs[char][current] < cost) continue;

      if (connection[current] && connection[current].length) {
        connection[current].forEach((conn) => {
          const next = conn[0];

          const nextCost = cost + conn[1];

          if (costs[char][next] > nextCost) {
            costs[char][next] = nextCost;
            pq.push([next, nextCost]);
          }
        });
      }
    }
  }

  dijkstra(a, "A");
  dijkstra(b, "B");
  dijkstra(s, "S");

  for (let i = 1; i <= n; i++) {
    const finalCost = costs["S"][i] + costs["A"][i] + costs["B"][i];

    answer = Math.min(answer, finalCost);
  }

  return answer;
}
