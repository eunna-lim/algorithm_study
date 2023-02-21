/*
// 정확성 : 7 / 11 (63.6 / 100.0)
// 테스트케이스 4, 7, 8, 11 실패
function solution(m, n, board) {
  var answer = 0;
  let newBoard = board.slice().map((row) => row.split(""));

  while (true) {
    const indexes = [];
    for (let r = 0; r < m - 1; r++) {
      const rows = newBoard.slice(r, r + 2);
      for (let c = 0; c < n - 1; c++) {
        const chunk = rows.reduce(
          (acc, row) => [...acc, ...row.slice(c, c + 2)],
          []
        );
        if (new Set(chunk).size === 1 && chunk.indexOf(" ") === -1) {
          for (let y = r; y < r + 2; y++) {
            for (let x = c; x < c + 2; x++) {
              indexes.push([y, x]);
            }
          }
        }
      }
    }

    if (indexes.length === 0) break;

    indexes.forEach(([y, x]) => {
      newBoard[y][x] = " ";
    });

    for (let y = m - 1; y >= 0; y--) {
      for (let x = 0; x < n; x++) {
        if (newBoard[y][x] === " ") {
          const pull = newBoard
            .map((val, idx) => (val[x] !== " " && idx < y ? idx : null))
            .filter((v) => v !== null);
          if (pull.length > 0) {
            newBoard[y][x] = newBoard[pull[pull.length - 1]][x];
            newBoard[pull[pull.length - 1]][x] = " ";
          }
        }
      }
    }

    answer += new Set(indexes.map((val) => val.join(""))).size;
  }

  return answer;
}
*/

function solution(m, n, board) {
  var answer = 0;
  let newBoard = board.slice().map((row) => row.split(""));

  while (true) {
    const indexes = [];
    for (let r = 0; r < m - 1; r++) {
      const rows = newBoard.slice(r, r + 2);
      for (let c = 0; c < n - 1; c++) {
        const chunk = rows.reduce(
          (acc, row) => [...acc, ...row.slice(c, c + 2)],
          []
        );
        if (new Set(chunk).size === 1 && chunk.indexOf(" ") === -1) {
          for (let y = r; y < r + 2; y++) {
            for (let x = c; x < c + 2; x++) {
              indexes.push([y, x]);
            }
          }
        }
      }
    }

    if (indexes.length === 0) break;

    indexes.forEach(([y, x]) => {
      newBoard[y][x] = " ";
    });

    for (let y = m - 1; y >= 0; y--) {
      for (let x = 0; x < n; x++) {
        if (newBoard[y][x] === " ") {
          const pull = newBoard
            .map((val, idx) => (val[x] !== " " && idx < y ? idx : null))
            .filter((v) => v !== null);
          if (pull.length > 0) {
            newBoard[y][x] = newBoard[pull[pull.length - 1]][x];
            newBoard[pull[pull.length - 1]][x] = " ";
          }
        }
      }
    }
  }

  answer = [].concat(...newBoard).filter((val) => val === " ").length;
  return answer;
}

// console.log(solution(2,2,["AA", "AA"])) //답 : 4
// console.log(solution(2,2, ["AA", "AB"])) //답 : 0

// console.log(solution(3,2, ["AA", "AA", "AB"])) //답 : 4
// console.log(solution(4,2, ["CC", "AA", "AA", "CC"])) //답 : 8

// console.log(solution(6,2, ["DD", "CC", "AA", "AA", "CC", "DD"])) //답 : 12
// console.log(solution(8,2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"])) //답 : 8
// console.log(solution(6,2, ["AA", "AA", "CC", "AA", "AA", "DD"])) //답 : 8
