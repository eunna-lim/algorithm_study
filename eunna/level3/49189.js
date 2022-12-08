/*
// 5, 8번에서 시간 초과 (7 / 9 통과, 77.8점)
function solution(n, edge) {
  var answer = 0;
  let conn = {};
  for (let i = 1; i <= n; i++) {
    conn[i] = [];
  }

  for (let vertex of edge) {
    const [node1, node2] = vertex;
    conn[node1] = [...conn[node1], node2];
    conn[node2] = [...conn[node2], node1];
  }

  let visited = new Array(n + 1).fill(false);
  let minDistance = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  visited[0] = true;
  minDistance[0] = 0;

  let queue = [1];
  minDistance[1] = 0;

  while (queue.length > 0) {
    const [node] = queue.splice(0, 1);

    for (let next of conn[node]) {
      if (visited[next]) continue;

      queue.push(next);
      minDistance[next] =
        minDistance[next] > minDistance[node] + 1
          ? minDistance[node] + 1
          : minDistance[next];
    }
    visited[node] = true;
  }

  const maxDistance = Math.max(...minDistance);
  minDistance.forEach((dist) => {
    if (dist === maxDistance) answer++;
  });

  return answer;
}
*/

function solution(n, edge) {
  var answer = 0;
  let conn = {};
  for (let i = 1; i <= n; i++) {
    conn[i] = [];
  }

  for (let vertex of edge) {
    const [node1, node2] = vertex;
    conn[node1] = [...conn[node1], node2];
    conn[node2] = [...conn[node2], node1];
  }

  let visited = new Array(n + 1).fill(false);
  let distance = new Array(n + 1).fill(0);
  visited[0] = true;
  distance[0] = 0;

  let queue = [1];
  visited[1] = true;
  distance[1] = 0;

  while (queue.length > 0) {
    const [node] = queue.splice(0, 1);

    for (let next of conn[node]) {
      if (!visited[next]) {
        queue.push(next);
        distance[next] = distance[node] + 1;
        visited[next] = true;
      }
    }
  }

  const maxDistance = Math.max(...distance);
  distance.forEach((dist) => {
    if (dist === maxDistance) answer++;
  });

  return answer;
}
