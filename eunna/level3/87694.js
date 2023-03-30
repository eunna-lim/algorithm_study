/*
// 정확성 : 9 / 30 (32.1 / 100.0)
// 시간 초과인 테스트케이스가 많음
function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  // 상 하 우 좌
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const width = Math.max(...rectangle.flat());

  const plain = Array.from({ length: width + 1 }, () =>
    new Array(width + 1).fill(0)
  );
  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        plain[y][x] = 1;
      }
    }
  });

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1 + 1; x < x2; x++) {
      for (let y = y1 + 1; y < y2; y++) {
        plain[y][x] = 0;
      }
    }
  });

  function possible(x, y) {
    return x >= 0 && x <= width && y >= 0 && y <= width;
  }

  const queue = [[characterX, characterY, 0, [[characterX, characterY]]]];
  while (queue.length) {
    const [curX, curY, dist, route] = queue.shift();
    if (curX === itemX && curY === itemY) {
      return dist;
    }

    moves.forEach(([my, mx]) => {
      const [nextX, nextY] = [curX + mx, curY + my];
      if (possible(nextX, nextY) && plain[nextY][nextX]) {
        queue.push([nextX, nextY, dist + 1, [...route, [nextX, nextY]]]);
      }
    });
  }
}
*/

// https://school.programmers.co.kr/questions/32456 풀이 참고
// 모두 색칠한 다음에 내부만 다시 비운다 -> 테두리만 남음! 단 2배로 사이즈를 키워서 한 칸 차이를 고려해야 함!!
// 방문한 곳은 다시 방문하지 않도록 plain[y][x]를 false로 만들어 줌
function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  // 상 하 우 좌
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const width = Math.max(...rectangle.flat());

  const plain = Array.from({ length: 2 * (width + 1) }, () =>
    new Array(2 * (width + 1)).fill(false)
  );
  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = 2 * x1; x <= 2 * x2; x++) {
      for (let y = 2 * y1; y <= 2 * y2; y++) {
        plain[y][x] = true;
      }
    }
  });

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = 2 * x1 + 1; x < 2 * x2; x++) {
      for (let y = 2 * y1 + 1; y < 2 * y2; y++) {
        plain[y][x] = false;
      }
    }
  });

  function possible(x, y) {
    return x >= 0 && x <= 2 * width && y >= 0 && y <= 2 * width;
  }

  const queue = [[characterX * 2, characterY * 2, 0]];

  while (queue.length) {
    const [curX, curY, dist] = queue.shift();
    if (curX === itemX * 2 && curY === itemY * 2) {
      return dist / 2;
    }
    plain[curY][curX] = false;

    moves.forEach(([my, mx]) => {
      const [nextX, nextY] = [curX + mx, curY + my];
      if (possible(nextX, nextY) && plain[nextY][nextX]) {
        queue.push([nextX, nextY, dist + 1]);
      }
    });
  }

  return answer;
}
