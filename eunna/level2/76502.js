function isRight(arr) {
  let check = [];
  for (let char of arr) {
    if (["(", "[", "{"].indexOf(char) !== -1) {
      check.push(char);
    } else {
      if (check.length < 0) return false;

      const open = check.pop();
      const match = [open, char].join("");
      if (["()", "[]", "{}"].indexOf(match) === -1) return false;
    }
  }

  if (check.length === 0) return true;
  else return false;
}

function solution(s) {
  var answer = 0;
  let queue = s.split("");

  while (true) {
    if (isRight(queue)) answer += 1;

    queue = [...queue.slice(1), queue[0]];

    if (queue.join("") === s) break;
  }

  return answer;
}
