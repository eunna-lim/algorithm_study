/*
// 정확성 : 21 / 21 (69.9)
// 효율성 : 0 / 4 (0.0)...
// 효율성 테스트 전체 실패
function solution(maps) {
  var answer = 1000000;
  // 동, 서, 남, 북 방향
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );

  function isValid(pos) {
    return (
      pos[1] < maps.length &&
      pos[1] >= 0 &&
      pos[0] < maps[0].length &&
      pos[0] >= 0 &&
      maps[pos[1]][pos[0]] === 1
    );
  }

  function move(cur) {
    const next = [];
    for (let i = 0; i < 4; i++) {
      next.push([cur[0] + dx[i], cur[1] + dy[i]]);
    }

    return next;
  }

  // x, y, 거리
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const cur = queue.shift();
    visited[cur[1]][cur[0]] = true;
    if (cur[1] === maps.length - 1 && cur[0] === maps[0].length - 1) {
      answer = Math.min(answer, cur[2]);
    }

    let next = move(cur);

    next.forEach((pos) => {
      if (isValid(pos) && !visited[pos[1]][pos[0]]) {
        queue.push([...pos, cur[2] + 1]);
      }
    });
  }

  if (answer === 1000000) return -1;

  return answer;
}
*/

// https://school.programmers.co.kr/questions/44256
// 답변 참고하여 방문했음을 체크하는 코드 위치를 next.forEach() 내부로 변경

function solution(maps) {
  var answer = 1000000;
  // 동, 서, 남, 북 방향
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );

  function isValid(pos) {
    return (
      pos[1] < maps.length &&
      pos[1] >= 0 &&
      pos[0] < maps[0].length &&
      pos[0] >= 0 &&
      maps[pos[1]][pos[0]] === 1
    );
  }

  function move(cur) {
    const next = [];
    for (let i = 0; i < 4; i++) {
      next.push([cur[0] + dx[i], cur[1] + dy[i]]);
    }

    return next;
  }

  // x, y, 거리
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const cur = queue.shift();

    if (cur[1] === maps.length - 1 && cur[0] === maps[0].length - 1) {
      answer = Math.min(answer, cur[2]);
    }

    let next = move(cur);

    next.forEach((pos) => {
      if (isValid(pos) && !visited[pos[1]][pos[0]]) {
        queue.push([...pos, cur[2] + 1]);
        visited[pos[1]][pos[0]] = true;
      }
    });
  }

  if (answer === 1000000) return -1;

  return answer;
}

// 방문 여부를 maps의 값을 거리 값으로 바꾸어서 확인
// 0인 경우 - 벽, 1인 경우 - 방문 가능한 곳, 1 이상의 자연수 - 이미 방문한 곳
function solution2(maps) {
  var answer = 1000000;
  // 동, 서, 남, 북 방향
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function isValid(pos) {
    return (
      pos[1] < maps.length &&
      pos[1] >= 0 &&
      pos[0] < maps[0].length &&
      pos[0] >= 0 &&
      maps[pos[1]][pos[0]] === 1
    );
  }

  function move(cur) {
    const next = [];
    for (let i = 0; i < 4; i++) {
      next.push([cur[0] + dx[i], cur[1] + dy[i]]);
    }

    return next;
  }

  // x, y, 거리
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const cur = queue.shift();

    if (cur[1] === maps.length - 1 && cur[0] === maps[0].length - 1) {
      answer = Math.min(answer, cur[2]);
    }

    let next = move(cur);

    next.forEach((pos) => {
      if (isValid(pos)) {
        queue.push([...pos, cur[2] + 1]);
        maps[pos[1]][pos[0]] = cur[2] + 1;
      }
    });
  }

  if (answer === 1000000) return -1;

  return answer;
}
