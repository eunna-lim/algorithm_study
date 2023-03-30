// dfs로 풀었음.
// 15,16,17,23,25 시간초과
// 14,18,19,20,21 실패
// function solution(n, paths, gates, summits) {
//   const graph = Array.from({ length: n + 1 }, () => []);
//   for (const [a, b, time] of paths) {
//     graph[a].push([b, time]);
//     graph[b].push([a, time]);
//   }

//   const isSummit = Array(n + 1).fill(false);
//   summits.forEach((summit) => (isSummit[summit] = true));

//   const result = [0, 10000001];
//   for (const gate of gates) {
//     const visit = Array(n + 1).fill(false);
//     gates.forEach((otherGate) => {
//       if (gate !== otherGate) visit[otherGate] = true;
//     });

//     const stack = [[gate, 0]];

//     while (stack.length) {
//       const [curPosition, time] = stack.pop();

//       if (isSummit[curPosition]) {
//         if (time < result[1]) {
//           result[0] = curPosition;
//           result[1] = time;
//         } else if (time === result[1]) {
//           result[0] = Math.min(result[0], curPosition);
//         }
//         continue;
//       }

//       visit[curPosition] = true;

//       graph[curPosition].forEach(([nextPosition, nextTime]) => {
//         if (!visit[nextPosition]) {
//           stack.push([nextPosition, Math.max(time, nextTime)]);
//         }
//       });
//     }
//   }

//   return result;
// }

function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b, time] of paths) {
    graph[a].push([b, time]);
    graph[b].push([a, time]);
  }

  // 산봉우리에 도착하면 더 이상 이동X
  for (const summit of summits) {
    graph[summit] = [];
  }

  const distance = Array(n + 1).fill(Infinity);

  gates.forEach((gate) => (distance[gate] = 0));

  let q = gates;
  while (q.length) {
    const set = new Set();
    while (q.length) {
      const from = q.pop();
      for (const [to, time] of graph[from]) {
        const maxTime = Math.max(distance[from], time);
        if (distance[to] > maxTime) {
          distance[to] = maxTime;
          set.add(to);
        }
      }
    }
    q = [...set];
  }

  return summits.reduce(
    (result, summit) => {
      if (result[1] > distance[summit]) return [summit, distance[summit]];
      if (result[1] === distance[summit]) return [Math.min(result[0], summit), distance[summit]];
      return result;
    },
    [0, Infinity]
  );
}
