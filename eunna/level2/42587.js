function solution(priorities, location) {
  var answer = 0;
  let turn = 1;
  let queue = priorities.slice().map((val, idx) => [val, idx]);

  while (queue.length) {
    const [pri, idx] = queue.shift();
    let highExist = false;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i][0] > pri) {
        highExist = true;
        break;
      }
    }

    if (highExist) {
      queue.push([pri, idx]);
    } else {
      if (location === idx) {
        answer = turn;
        break;
      } else turn++;
    }
  }

  return answer;
}
