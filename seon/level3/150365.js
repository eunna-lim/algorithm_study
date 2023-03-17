function solution(n, m, x, y, r, c, k) {
  const remain = k - Math.abs(r - x) - Math.abs(c - y);
  if (remain < 0 || remain % 2 === 1) return "impossible";

  const directions = [
    [1, 0, "d"],
    [0, -1, "l"],
    [0, 1, "r"],
    [-1, 0, "u"],
  ];

  const q = [[x, y, ""]];
  while (q.length) {
    const [row, column, route] = q.shift();

    if (route.length === k && row === r && column === c) return route;

    for (const [dx, dy, direction] of directions) {
      const nx = row + dx;
      const ny = column + dy;

      if (nx <= 0 || nx > n || ny <= 0 || ny > m) continue;
      if (Math.abs(nx - r) + Math.abs(ny - c) + route.length + 1 > k) continue;

      q.push([nx, ny, route + direction]);
      break;
    }
  }
}
