function solution(N, road, K) {
  var answer = 0;

  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach(([ver1, ver2, dist]) => {
    graph[ver1].push([ver2, dist]);
    graph[ver2].push([ver1, dist]);
  });

  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  const queue = [[1, 0]];
  while (queue.length) {
    const [cur_node, cur_dist] = queue.shift();

    graph[cur_node].forEach(([next_node, dist]) => {
      if (distances[next_node] > cur_dist + dist) {
        distances[next_node] = cur_dist + dist;
        queue.push([next_node, distances[next_node]]);
      }
    });
  }
  answer = distances.filter((dist) => dist <= K).length;

  return answer;
}
