function solution(msg) {
  const dict = {};
  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode("A".charCodeAt() + i)] = i + 1;
  }

  const answer = [];
  let lastIndex = 27;
  while (msg.length) {
    if (dict[msg]) {
      answer.push(dict[msg]);
      msg = "";
    }

    for (let i = 2; i <= msg.length; i++) {
      if (!dict[msg.substring(0, i)]) {
        dict[msg.substring(0, i)] = lastIndex++;
        answer.push(dict[msg.substring(0, i - 1)]);
        msg = msg.substring(i - 1);
        break;
      }
    }
  }

  return answer;
}
