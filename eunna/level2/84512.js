function solution(word) {
  var answer = 0;
  const chars = ["A", "E", "I", "O", "U"];
  let dict = chars.slice();

  for (let i = 0; i < 4; i++) {
    const arr = [];
    for (let j = 0; j < dict.length; j++) {
      for (let k = 0; k < 5; k++) {
        arr.push(dict[j].concat(chars[k]));
      }
    }
    dict.push(...arr);
  }

  dict = Array.from(new Set(dict));

  dict.sort();
  answer = dict.indexOf(word) + 1;

  return answer;
}
