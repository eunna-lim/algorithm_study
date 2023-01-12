/*
// 정확성 : 10 / 38 (25.0 / 100.0)
// 런타임 에러가 많이 발생...
function solution(key, lock) {
  var answer = false;
  let blankPos = [];
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      if (lock[i][j] === 0) blankPos.push([i, j]);
    }
  }

  if (blankPos.length === 0) return true;
  if (
    Array.from(new Set(key.reduce((acc, row) => [...acc, ...row], []))).join(
      ""
    ) === "0"
  )
    return false;

  const row = Math.max(...blankPos.map(([r, c]) => r));
  const col = Math.max(...blankPos.map(([r, c]) => c));

  if (row > key.length || col > key.length) return false;

  let blanks = Array.from(Array(row), () => Array(col).fill(0));

  blankPos.forEach(([r, c]) => {
    blanks[row - r][col - c] = 1;
  });

  // 시계 방향으로 회전하는 함수
  function rotate(blanks) {
    const row = blanks.length,
      col = blanks[0].length;
    let newblanks = Array.from(Array(col), () => Array(row).fill(0));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        newblanks[j][row - 1 - i] = blanks[i][j];
      }
    }

    return newblanks;
  }

  // key 내부에 같은 게 있는 지 확인하는 함수
  function isBlanksIn(key, blanks) {
    const row = blanks.length,
      col = blanks[0].length;
    const blanksToStr = blanks.map((r) => r.join("")).join("\n");

    for (let i = 0; i <= key.length - row; i++) {
      for (let j = 0; j <= key.length - col; j++) {
        const slice = key.slice(i, i + row).map((r) => r.slice(j, j + col));
        const sliceToStr = slice.map((r) => r.join("")).join("\n");

        if (blanksToStr === sliceToStr) return true;
      }
    }

    return false;
  }

  for (let i = 0; i < 4; i++) {
    if (isBlanksIn(key, blanks)) {
      answer = true;
      break;
    }
    blanks = rotate(blanks);
  }

  return answer;
}
*/

/*
// 정확성 : 14 / 38 (35.0 / 100.0)
function solution(key, lock) {
  var answer = false;
  if (
    Array.from(new Set(key.reduce((acc, row) => [...acc, ...row], []))).join(
      ""
    ) === "0"
  )
    return false;

  let keyPos = [];
  let lockPos = [];

  key.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) keyPos.push([i, j]);
    });
  });

  lock.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 0) lockPos.push([i, j]);
    });
  });

  if (lockPos.length === 0) return true;

  const m = key.length,
    n = lock.length;
  function rotate(keyPos) {
    let rotatePos = [];
    keyPos.forEach((pos) => {
      rotatePos.push([pos[1], m - 1 - pos[0]]);
    });
    return rotatePos;
  }

  for (let cnt = 0; cnt < 4; cnt++) {
    keyPos = rotate(keyPos);
    let possible = keyPos.slice();

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < keyPos.length; j++) {
        if (keyPos[j][0] + i >= 0 && keyPos[j][0] + i < n)
          possible.push([keyPos[j][0] + i, keyPos[j][1]]);
        if (keyPos[j][0] - i >= 0 && keyPos[j][0] - i < n)
          possible.push([keyPos[j][0] - i, keyPos[j][1]]);
      }
    }

    let tmp = possible.slice();
    const posLen = possible.length;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < tmp.length; j++) {
        if (tmp[j][1] + i >= 0 && tmp[j][1] + i < n)
          possible.push([tmp[j][0], tmp[j][1] + i]);
        if (tmp[j][1] - i >= 0 && tmp[j][1] - i < n)
          possible.push([tmp[j][0], tmp[j][1] - i]);
      }
    }

    for (let i = 0; i < parseInt(possible.length / keyPos.length); i++) {
      const slicedPossible = possible.slice(i, i + keyPos.length);
      let tmpLock = lockPos.slice().map((v) => v.join(""));

      slicedPossible.forEach((each) => {
        const idx = tmpLock.indexOf(each.join(""));
        if (idx !== -1) tmpLock.splice(idx, 1);
      });

      if (tmpLock.length === 0) return true;
    }
  }

  return answer;
}
*/

/*
// 정확성 : 35 / 38 (93.0 / 100.0)
// 테스트케이스 23, 25, 33 실패 (열쇠의 돌기와 자물쇠의 돌기가 만나면 안 된다는 부분을 간과함)
function solution(key, lock) {
  var answer = false;
  if (
    Array.from(new Set(key.reduce((acc, row) => [...acc, ...row], []))).join(
      ""
    ) === "0"
  )
    return false;

  let keyPos = [];
  let lockPos = [];

  key.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) keyPos.push([i, j]);
    });
  });

  lock.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 0) lockPos.push([i, j]);
    });
  });

  if (lockPos.length === 0) return true;

  const m = key.length,
    n = lock.length;
  function rotate(positions, size) {
    let rotatePos = [];
    positions.forEach((pos) => {
      rotatePos.push([pos[1], size - 1 - pos[0]]);
    });
    return rotatePos;
  }

  const keyStr = keyPos.map((pos) => pos.join(""));
  for (let cnt = 0; cnt < 4; cnt++) {
    lockPos = rotate(lockPos, n);

    const row = Math.max(...lockPos.map((val) => val[0])),
      col = Math.max(...lockPos.map((val) => val[1]));
    lockPos.forEach((val, idx) => {
      lockPos[idx] = [row - val[0], col - val[1]];
    });

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        let tmpKey = keyStr.slice();
        let cnt = 0;
        for (const pos of lockPos) {
          if (
            pos[0] + i >= 0 &&
            pos[0] + i < m &&
            pos[1] + j >= 0 &&
            pos[1] + j < m
          ) {
            const tmpPos = [pos[0] + i, pos[1] + j].join("");
            const index = tmpKey.indexOf(tmpPos);
            if (index !== -1) cnt++;
          }
        }
        if (cnt === lockPos.length) return true;
      }
    }
  }

  return answer;
}
*/

// https://school.programmers.co.kr/questions/34001 풀이 참고
function match(r, c, key, lock) {
  let tmpLock = JSON.parse(JSON.stringify(lock));
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (
        r + i >= tmpLock.length ||
        c + j >= tmpLock.length ||
        c + j < 0 ||
        r + i < 0
      )
        continue;
      else if (tmpLock[r + i][c + j] == 1 && key[i][j] == 1) return false;
      else if (key[i][j] == 1) tmpLock[r + i][c + j] = 1;
    }
  }

  for (let i = 0; i < tmpLock.length; i++) {
    for (let j = 0; j < tmpLock.length; j++) {
      if (tmpLock[i][j] == 0) return false;
    }
  }

  return true;
}

function rotate(key) {
  let tmpKey = JSON.parse(JSON.stringify(key));

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      key[i][j] = tmpKey[key.length - j - 1][i];
    }
  }
}

function solution(key, lock) {
  let result = false;

  for (let cnt = 0; cnt < 4; cnt++) {
    rotate(key);
    for (let i = -key.length; i < lock.length; i++) {
      for (let j = -key.length; j < lock.length; j++) {
        result = result || match(i, j, key, lock);
      }
    }
  }

  return result;
}
