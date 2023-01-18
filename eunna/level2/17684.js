function solution(msg) {
  var answer = [];
  let codes = {};
  let cnt = 1;
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    codes[String.fromCharCode(i)] = cnt++;
  }

  for (let i = 0; i < msg.length; i++) {
    let code = msg.slice(i);
    let end = msg.length - 1;
    while (code.length > 1) {
      if (codes[code]) break;
      else code = code.slice(0, end--);
    }
    answer.push(codes[code]);

    if (i + end + 1 >= msg.length) break;

    codes[code + msg[i + end + 1]] = cnt++;
    if (code.length > 1) i = i + end;
  }
  return answer;
}
