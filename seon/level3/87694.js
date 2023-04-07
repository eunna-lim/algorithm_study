function solution(rectangle, characterX, characterY, itemX, itemY) {
  const graph = Array.from({ length: 102 }, () => Array(102).fill(0));

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1 * 2; x <= x2 * 2; x++) {
      for (let y = y1 * 2; y <= y2 * 2; y++) {
        graph[x][y] = 1;
      }
    }
  });

  for (let x = 1; x < 102; x++) {
    for (let y = 1; y < 102; y++) {
      if (
        graph[x][y] === 1 &&
        (graph[x - 1][y + 1] === 0 ||
          graph[x][y + 1] === 0 ||
          graph[x + 1][y + 1] === 0 ||
          graph[x - 1][y] === 0 ||
          graph[x + 1][y] === 0 ||
          graph[x - 1][y - 1] === 0 ||
          graph[x][y - 1] === 0 ||
          graph[x + 1][y - 1] === 0)
      )
        graph[x][y] = 2;
    }
  }

  let answer = Infinity;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const stack = [[characterX * 2, characterY * 2, 0]];

  while (stack.length) {
    const [x, y, count] = stack.pop();

    if (x === itemX * 2 && y === itemY * 2) {
      answer = Math.min(answer, count);
      continue;
    }

    graph[x][y] = 3;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (graph[nx][ny] === 2) stack.push([nx, ny, count + 1]);
    }
  }

  return answer / 2;
}
