function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  const q = [[0, 0, 0]];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (q.length > 0) {
    const [x, y, num] = q.shift();

    if (x < 0 || x >= N || y < 0 || y >= M || maps[x][y] !== 1) continue;
    maps[x][y] += num;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      q.push([nx, ny, maps[x][y]]);
    }
  }

  return maps[N - 1][M - 1] === 1 ? -1 : maps[N - 1][M - 1];
}
