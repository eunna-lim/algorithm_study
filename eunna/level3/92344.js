/*
// 문제대로 단순 풀이
// 정확성 : 10 / 10 (53.8)
// 효율성 : 0 / 7 (0.0) 효율성 다 틀림..
// 합계 : 53.8 / 100.0
function solution(board, skill) {
  var answer = 0;
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    switch (type) {
      case 1:
        for (let r = r1; r <= r2; r++) {
          for (let c = c1; c <= c2; c++) {
            board[r][c] -= degree;
          }
        }
        break;
      case 2:
        for (let r = r1; r <= r2; r++) {
          for (let c = c1; c <= c2; c++) {
            board[r][c] += degree;
          }
        }
        break;
    }
  });

  board.forEach((row) => {
    row.forEach((val) => {
      if (val > 0) answer++;
    });
  });
  return answer;
}
*/

function solution(board, skill) {
  var answer = 0;
  let changes = Array.from({ length: board.length + 1 }, () =>
    new Array(board[0].length + 1).fill(0)
  );
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    switch (type) {
      case 1:
        changes[r1][c1] += degree * -1;
        changes[r2 + 1][c2 + 1] += degree * -1;
        changes[r2 + 1][c1] += degree * 1;
        changes[r1][c2 + 1] += degree * 1;
        break;

      case 2:
        changes[r1][c1] += degree;
        changes[r2 + 1][c2 + 1] += degree;
        changes[r2 + 1][c1] += degree * -1;
        changes[r1][c2 + 1] += degree * -1;

        break;
    }
  });

  for (let r = 0; r < changes.length; r++) {
    for (let c = 1; c < changes[0].length; c++) {
      changes[r][c] += changes[r][c - 1];
    }
  }

  for (let r = 1; r < changes.length; r++) {
    for (let c = 0; c < changes[0].length; c++) {
      changes[r][c] += changes[r - 1][c];
    }
  }

  board.forEach((row, r) => {
    row.forEach((val, c) => {
      if (val + changes[r][c] > 0) answer++;
    });
  });

  return answer;
}
