function solution(dirs) {
  var answer = 0;
  const moves = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  const visited = [];
  let pos = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const [mx, my] = moves[dirs[i]];
    const nextPos = [pos[0] + mx, pos[1] + my];

    if (isValid(nextPos)) {
      if (visited.indexOf([pos, nextPos].join("")) === -1) {
        visited.push([pos, nextPos].join(""));
        visited.push([nextPos, pos].join(""));
        answer += 1;
      }

      pos = nextPos;
    }
  }

  return answer;
}

function isValid(pos) {
  return pos[0] >= -5 && pos[0] <= 5 && pos[1] >= -5 && pos[1] <= 5;
}
