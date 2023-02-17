function solution(n, roads, sources, destination) {
  const graph = Array.from({ length: n + 1 }, () => []);
  roads.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const regions = Array(n + 1).fill(Infinity);
  regions[destination] = 0;

  const q = [destination];
  while (q.length) {
    const from = q.shift();

    graph[from].forEach((to) => {
      if (isFinite(regions[to])) return;
      regions[to] = regions[from] + 1;
      q.push(to);
    });
  }

  return sources.map((region) => (isFinite(regions[region]) ? regions[region] : -1));
}
