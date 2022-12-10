function solution(n, edge) {
  const graph = edge.reduce((acc, [a, b]) => {
    acc[a] = !acc[a] ? [b] : [...acc[a], b];
    acc[b] = !acc[b] ? [a] : [...acc[b], a];

    return acc;
  }, {});

  const count = new Array(n + 1).fill(0);
  count[1] = 1;

  const q = [1];
  while (q.length) {
    const node = q.shift();

    graph[node].forEach((n) => {
      if (!count[n]) {
        count[n] = count[node] + 1;
        q.push(n);
      }
    });
  }

  const max = Math.max(...count);
  return count.reduce((count, cur) => (cur === max ? (count += 1) : count), 0);
}
