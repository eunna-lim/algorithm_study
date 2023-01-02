function makeSet(str) {
  const set = {};
  str = str.toLowerCase();
  for (let idx = 0; idx < str.length - 1; idx++) {
    if (
      str.charCodeAt(idx) < 97 ||
      str.charCodeAt(idx) > 122 ||
      str.charCodeAt(idx + 1) < 97 ||
      str.charCodeAt(idx + 1) > 122
    )
      continue;

    const element = str[idx] + str[idx + 1];
    set[element] = set[element] ? set[element] + 1 : 1;
  }
  return set;
}

function solution(str1, str2) {
  const set1 = makeSet(str1);
  const set2 = makeSet(str2);

  if (!Object.keys(set1).length && !Object.keys(set2).length) return 65536;

  const intersection = Object.keys(set1).reduce((prev, cur) => {
    if (set2[cur]) return prev + Math.min(set1[cur], set2[cur]);
    else return prev;
  }, 0);

  const union =
    Object.keys(set1).reduce((prev, cur) => {
      if (set2[cur]) return prev + Math.max(set1[cur], set2[cur]);
      else return prev + set1[cur];
    }, 0) +
    Object.keys(set2).reduce((prev, cur) => {
      if (!set1[cur]) return prev + set2[cur];
      else return prev;
    }, 0);

  return Math.floor((intersection / union) * 65536);
}
