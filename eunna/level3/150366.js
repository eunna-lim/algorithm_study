/*
// 정확성 : 15 / 22 (68.2 / 100.0)
// 테스트케이스 15 ~ 21 시간초과로 실패
function solution(commands) {
  var answer = [];
  const chart = Array.from({ length: 51 }, () => new Array(51).fill(null));
  const mergePos = {};

  function updatePos([r, c, word]) {
    chart[r][c] = word;
    const strPos = r + " " + c;
    if (mergePos[strPos] && mergePos[strPos].length) {
      const stack = [strPos];
      const visited = [];
      while (stack.length) {
        const pos = stack.pop();
        visited.push(pos);
        const [r, c] = pos.split(" ");
        chart[r][c] = word;
        if (mergePos[pos] && mergePos[pos].length) {
          mergePos[pos].forEach((p) => {
            if (visited.indexOf(p) === -1) stack.push(p);
          });
        }
      }
    } else {
      mergePos[strPos] = [];
    }
  }

  function updateWord([word1, word2]) {
    for (let i = 1; i <= 50; i++) {
      for (let j = 1; j <= 50; j++) {
        if (chart[i][j] === word1) {
          chart[i][j] = word2;
        }
      }
    }
  }

  function merge([r1, c1, r2, c2]) {
    if (r1 === r2 && c1 === c2) return;

    const strPos1 = r1 + " " + c1,
      strPos2 = r2 + " " + c2;
    const totalPos = [];
    const stack = [strPos1, strPos2];
    while (stack.length) {
      const pos = stack.pop();
      if (totalPos.indexOf(pos) > -1) continue;
      totalPos.push(pos);

      if (mergePos[pos] && mergePos[pos].length) {
        stack.push(...mergePos[pos]);
      } else {
        mergePos[pos] = [];
      }
    }

    totalPos.forEach((pos) => {
      const rest = totalPos.filter((val) => val !== pos);
      mergePos[pos] = rest.slice();
    });

    if (chart[r1][c1]) updatePos([r1, c1, chart[r1][c1]]);
    else updatePos([r2, c2, chart[r2][c2]]);
  }

  function unmerge([r, c]) {
    const previousValue = chart[r][c];
    const stack = [r + " " + c];
    const visited = [];
    while (stack.length) {
      const pos = stack.pop();
      visited.push(pos);
      const [r, c] = pos.split(" ");
      chart[r][c] = null;
      if (mergePos[pos] && mergePos[pos].length) {
        mergePos[pos].forEach((p) => {
          if (visited.indexOf(p) === -1) stack.push(p);
        });
      }
      mergePos[pos] = [];
    }
    mergePos[r + " " + c] = [];
    chart[r][c] = previousValue;
  }

  commands.forEach((command) => {
    const cmd = command.split(" ");

    switch (cmd[0]) {
      case "UPDATE":
        if (cmd.length === 4) updatePos(cmd.slice(1));
        else updateWord(cmd.slice(1));
        break;
      case "MERGE":
        merge(cmd.slice(1));
        break;
      case "UNMERGE":
        unmerge(cmd.slice(1));
        break;
      case "PRINT":
        const [r, c] = cmd.slice(1);
        answer.push(chart[r][c] ? chart[r][c] : "EMPTY");
        break;
    }
  });

  return answer;
}
*/

/*
// 정확성 : 21 / 22 (95.5)
// 테스트케이스 21번 시간 초과
function solution(commands) {
  var answer = [];

  const chart = Array.from({ length: 51 }, () => new Array(51).fill(null));
  const mergePos = {};

  function updatePos([r, c, word]) {
    chart[r][c] = word;
    const strPos = r + " " + c;
    if (mergePos[strPos] && mergePos[strPos].length) {
      const stack = [strPos];
      const visited = [];
      while (stack.length) {
        const pos = stack.pop();
        if (visited.indexOf(pos) > -1) continue;
        visited.push(pos);

        const [r, c] = pos.split(" ");
        chart[r][c] = word;
        if (mergePos[pos] && mergePos[pos].length) {
          stack.push(...mergePos[pos]);
        }
      }
    } else {
      mergePos[strPos] = [];
    }
  }

  function updateWord([word1, word2]) {
    for (let i = 1; i <= 50; i++) {
      for (let j = 1; j <= 50; j++) {
        if (chart[i][j] === word1) {
          chart[i][j] = word2;
        }
      }
    }
  }

  function merge([r1, c1, r2, c2]) {
    if (r1 === r2 && c1 === c2) return;

    const strPos1 = r1 + " " + c1,
      strPos2 = r2 + " " + c2;
    if (
      mergePos[strPos1] &&
      mergePos[strPos2] &&
      mergePos[strPos1].indexOf(strPos2) > -1 &&
      mergePos[strPos2].indexOf(strPos1) > -1
    )
      return;

    const totalPos = [];
    const stack = [strPos1, strPos2];
    while (stack.length) {
      const pos = stack.pop();
      if (totalPos.indexOf(pos) > -1) continue;
      totalPos.push(pos);

      if (mergePos[pos] && mergePos[pos].length) {
        stack.push(...mergePos[pos]);
      } else {
        mergePos[pos] = [];
      }
    }

    totalPos.forEach((pos) => {
      mergePos[pos] = totalPos.slice();
    });

    if (chart[r1][c1]) updatePos([r1, c1, chart[r1][c1]]);
    else updatePos([r2, c2, chart[r2][c2]]);
  }

  function unmerge([r, c]) {
    const previousValue = chart[r][c];
    const stack = [r + " " + c];
    const visited = [];
    while (stack.length) {
      const pos = stack.pop();
      if (visited.indexOf(pos) > -1) continue;

      visited.push(pos);
      const [r, c] = pos.split(" ");
      chart[r][c] = null;
      if (mergePos[pos] && mergePos[pos].length) {
        stack.push(...mergePos[pos]);
      }
      mergePos[pos] = [];
    }
    mergePos[r + " " + c] = [];
    chart[r][c] = previousValue;
  }

  commands.forEach((command) => {
    const [cmd, ...rest] = command.split(" ");

    switch (cmd) {
      case "UPDATE":
        if (rest.length === 3) updatePos(rest);
        else updateWord(rest);
        break;
      case "MERGE":
        merge(rest);
        break;
      case "UNMERGE":
        unmerge(rest);
        break;
      case "PRINT":
        const [r, c] = rest;
        answer.push(chart[r][c] ? chart[r][c] : "EMPTY");
        break;
    }
  });

  return answer;
}
*/

// https://velog.io/@ddongh1122/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%91%9C-%EB%B3%91%ED%95%A9 풀이 참고
// union-find 풀이 적용하여 최상단 부모(루트)를 찾도록 함!
// 이차원 배열(51 * 51)로 풀이하기보다 일차원 배열(2501 * 1)로 풀이할 수 있도록 함. -> 보다 간단함.
function solution(commands) {
  var answer = [];

  const chart = Array.from({ length: 2501 }, () => null);
  const parents = Array.from({ length: 2501 }, (_, idx) => idx);

  function posToIdx(r, c) {
    return (r - 1) * 50 + c * 1;
  }

  function find(idx) {
    if (parents[idx] === idx) return idx;
    else parents[idx] = find(parents[idx]);

    return parents[idx];
  }

  function union(idx1, idx2) {
    const parent1 = find(idx1),
      parent2 = find(idx2);
    if (parent1 !== parent2) {
      parents[parent2] = parent1;
    }
  }

  function updatePos(r, c, word) {
    const idx = posToIdx(r, c);
    const parent = find(idx);
    chart[parent] = word;
  }

  function updateWord(word1, word2) {
    for (let idx = 1; idx <= 2500; idx++) {
      if (chart[idx] === word1) {
        chart[idx] = word2;
      }
    }
  }

  function merge(r1, c1, r2, c2) {
    if (r1 === r2 && c1 === c2) return;
    const idx1 = posToIdx(r1, c1),
      idx2 = posToIdx(r2, c2);
    const parent1 = find(idx1),
      parent2 = find(idx2);

    if (parent1 === parent2) return;

    const word = chart[parent1] ? chart[parent1] : chart[parent2];
    chart[parent1] = null;
    chart[parent2] = null;
    union(parent1, parent2);
    chart[parent1] = word;
  }

  function unmerge(r, c) {
    const idx = posToIdx(r, c);
    const parent = find(idx);

    const parentWord = chart[parent];
    chart[parent] = null;
    chart[idx] = parentWord;

    const mergedArr = [];
    for (let idx = 1; idx <= 2500; idx++) {
      if (find(idx) === parent) {
        mergedArr.push(idx);
      }
    }

    mergedArr.forEach((idx) => {
      parents[idx] = idx;
    });
  }

  commands.forEach((command) => {
    const [cmd, ...rest] = command.split(" ");

    switch (cmd) {
      case "UPDATE":
        if (rest.length === 3) updatePos(...rest);
        else updateWord(...rest);
        break;
      case "MERGE":
        merge(...rest);
        break;
      case "UNMERGE":
        unmerge(...rest);
        break;
      case "PRINT":
        const idx = posToIdx(...rest);
        const parent = find(idx);
        answer.push(chart[parent] ? chart[parent] : "EMPTY");
        break;
    }
  });

  return answer;
}
