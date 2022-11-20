function solution(n, words) {
  const check = {};
  let currentUser = 1;
  let cnt = 1;
  let idx = 0;

  for (let word of words) {
    if (check[word]) return [currentUser, cnt];
    else if (
      words[idx - 1] &&
      words[idx - 1][words[idx - 1].length - 1] !== word[0]
    )
      return [currentUser, cnt];
    else {
      check[word] = true;

      if (currentUser === n) {
        currentUser = 1;
        cnt += 1;
      } else currentUser += 1;

      idx += 1;
    }
  }

  return [0, 0];
}
