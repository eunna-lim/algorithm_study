/*
// 정확성 : 6 / 23 (28.8 / 100.0)
// 테스트케이스 4 ~ 9번만 맞음...
function solution(n, build_frame) {
  var answer = [];
  let frames = Array.from({ length: n + 2 }, () =>
    Array.from({ length: n + 2 }, () => [])
  );

  function setPillarAvailable(x, y) {
    if (y === 0) return true;
    else if (x > 0 && frames[x - 1][y].indexOf(1) !== -1) return true;
    else if (frames[x][y].indexOf(1) !== -1) return true;
    else if (y > 0 && frames[x][y - 1].indexOf(0) !== -1) return true;
    return false;
  }

  function setGirderAvailable(x, y) {
    if (
      (y > 0 && frames[x][y - 1].indexOf(0) !== -1) ||
      (y > 0 && x < n && frames[x + 1][y - 1].indexOf(0) !== -1)
    )
      return true;
    else if (
      x > 0 &&
      x < n &&
      frames[x - 1][y].indexOf(1) !== -1 &&
      frames[x + 1][y].indexOf(1) !== -1
    )
      return true;
    else return false;
  }

  function delPillarAvailable(x, y) {
    if (frames[x][y].length === 0) return false;

    if (y < n && frames[x][y + 1].indexOf(0) !== -1) return false;
    else if (frames[x][y].indexOf(1) !== -1) return false;
    else if (x > 0 && frames[x - 1][y].indexOf(1) !== -1) return false;
    else return true;
  }

  function delGirderAvailable(x, y) {
    if (frames[x][y].length === 0) return false;

    if (
      x > 0 &&
      frames[x][y].indexOf(0) !== -1 &&
      frames[x - 1][y].indexOf(1) === -1
    )
      return false;
    else if (
      x < n &&
      frames[x + 1][y].indexOf(0) !== -1 &&
      frames[x + 1][y].indexOf(1) === -1
    )
      return false;
    else if (x > 0 && frames[x - 1][y].indexOf(1) !== -1) return false;
    else if (x < n && frames[x + 1][y].indexOf(1) !== -1) return false;
    else return true;
  }

  build_frame.forEach((frame) => {
    const [x, y, type, action] = frame;

    switch (action) {
      case 0:
        if (type === 0 && delPillarAvailable(x, y))
          frames[x][y].splice(frames[x][y].indexOf(0), 1);
        if (type === 1 && delGirderAvailable(x, y))
          frames[x][y].splice(frames[x][y].indexOf(1), 1);
        break;
      case 1:
        if (type === 0 && setPillarAvailable(x, y)) frames[x][y].push(0);
        if (type === 1 && setGirderAvailable(x, y)) frames[x][y].push(1);
        break;
    }
  });

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (frames[x][y].length > 1) {
        answer.push([x, y, 0]);
        answer.push([x, y, 1]);
      } else if (frames[x][y].length) answer.push([x, y, frames[x][y][0]]);
    }
  }
  return answer;
}
*/

function solution(n, build_frame) {
  var answer = [];
  let frames = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => [])
  );

  function setPillarAvailable(x, y) {
    if (y === 0) return true;
    else if (x > 0 && frames[x - 1][y].indexOf(1) !== -1) return true;

    if (frames[x][y].indexOf(1) !== -1) return true;
    else if (y > 0 && frames[x][y - 1].indexOf(0) !== -1) return true;
    return false;
  }

  function setGirderAvailable(x, y) {
    if (
      (y > 0 && frames[x][y - 1].indexOf(0) !== -1) ||
      (y > 0 && x < n && frames[x + 1][y - 1].indexOf(0) !== -1)
    )
      return true;
    else if (
      x > 0 &&
      x < n &&
      frames[x - 1][y].indexOf(1) !== -1 &&
      frames[x + 1][y].indexOf(1) !== -1
    )
      return true;
    else return false;
  }

  function checkFrames(frames) {
    let check = true;
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        for (let k = 0; k < frames[i][j].length; k++) {
          check =
            frames[i][j][k] === 0
              ? setPillarAvailable(i, j)
              : setGirderAvailable(i, j);
          if (!check) return check;
        }
      }
    }
    return check;
  }

  build_frame.forEach((frame) => {
    const [x, y, type, action] = frame;

    switch (action) {
      case 0:
        const tmp = frames[x][y].slice();
        if (type === 0) frames[x][y].splice(frames[x][y].indexOf(0), 1);
        else frames[x][y].splice(frames[x][y].indexOf(1), 1);

        if (!checkFrames(frames)) frames[x][y] = tmp.slice();

        break;
      case 1:
        if (type === 0 && setPillarAvailable(x, y)) frames[x][y].push(0);
        else if (type === 1 && setGirderAvailable(x, y)) frames[x][y].push(1);
        break;
    }
  });

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (frames[x][y].length > 1) {
        answer.push([x, y, 0]);
        answer.push([x, y, 1]);
      } else if (frames[x][y].length) answer.push([x, y, frames[x][y][0]]);
    }
  }
  return answer;
}
