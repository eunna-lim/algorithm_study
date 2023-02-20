function solution(dirs) {
  const routes = new Set();
  const dx = { U: 0, D: 0, R: 1, L: -1 };
  const dy = { U: 1, D: -1, R: 0, L: 0 };
  let x = 0,
    y = 0;

  for (const dir of dirs) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
    routes.add(`${x}${y}${nx}${ny}`);
    routes.add(`${nx}${ny}${x}${y}`);
    x = nx;
    y = ny;
  }

  return routes.size / 2;
}
