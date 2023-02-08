function isPossiblePillar(x, y, answer) {
  return (
    y === 0 ||
    answer.some(
      ([nx, ny, nstructure]) =>
        (nx === x - 1 && ny === y && nstructure === 1) ||
        (nx === x && ny === y && nstructure === 1) ||
        (nx === x && ny === y - 1 && nstructure === 0)
    )
  );
}

function isPossibleBeam(x, y, answer) {
  return (
    answer.some(
      ([nx, ny, nstructure]) =>
        (nx === x && ny === y - 1 && nstructure === 0) || (nx === x + 1 && ny === y - 1 && nstructure === 0)
    ) ||
    (answer.some(([nx, ny, nstructure]) => nx === x - 1 && ny === y && nstructure === 1) &&
      answer.some(([nx, ny, nstructure]) => nx === x + 1 && ny === y && nstructure === 1))
  );
}

function isPossible(answer) {
  for (const [x, y, structure] of answer) {
    if (structure === 0 && isPossiblePillar(x, y, answer)) continue;
    else if (structure === 1 && isPossibleBeam(x, y, answer)) continue;
    else return;
  }
  return true;
}

function solution(n, build_frame) {
  let answer = [];

  for (const [x, y, structure, action] of build_frame) {
    if (action === 1) {
      answer.push([x, y, structure]);
      if (!isPossible(answer)) answer.pop();
    } else {
      answer = answer.filter(([nx, ny, nstructure]) => !(nx === x && ny === y && nstructure === structure));
      if (!isPossible(answer)) answer.push([x, y, structure]);
    }
  }

  return answer.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}
