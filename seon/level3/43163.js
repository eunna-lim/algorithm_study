function isOneDiff(word1, word2) {
  let [cnt, idx] = [0, 0];

  while (idx < word1.length) {
    if (word1[idx] !== word2[idx]) cnt += 1;
    idx += 1;
  }

  return cnt === 1;
}

function solution(begin, target, words) {
  let ans = 0;
  const q = [];
  words.forEach((word, idx) => {
    if (isOneDiff(begin, word)) q.push([idx]);
  });

  while (q.length) {
    const arr = q.pop();
    if (words[arr[0]] === target) return arr.length;

    words.forEach((word, idx) => {
      if (arr.includes(idx)) return;
      if (isOneDiff(words[arr[0]], word)) {
        arr.unshift(idx);
        q.push([...arr]);
        arr.shift();
      }
    });
  }

  return 0;
}
