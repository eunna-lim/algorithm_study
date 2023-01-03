function solution(str1, str2) {
  var answer = 0;

  function isAlpha(char) {
    return (
      char.charCodeAt(0) >= "A".charCodeAt(0) &&
      char.charCodeAt(0) <= "Z".charCodeAt(0)
    );
  }

  let set1 = [];
  let set2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const char1 = str1[i].toUpperCase(),
      char2 = str1[i + 1].toUpperCase();
    if (isAlpha(char1) && isAlpha(char2)) {
      set1.push(char1.concat(char2));
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const char1 = str2[i].toUpperCase(),
      char2 = str2[i + 1].toUpperCase();
    if (isAlpha(char1) && isAlpha(char2)) {
      set2.push(char1.concat(char2));
    }
  }

  if (set1.length === 0 && set2.length === 0) return 65536;

  let and = [];
  let or = [];
  let set = [...new Set([...set1, ...set2])];

  set.forEach((val) => {
    const inSet1 = set1.filter((comp) => comp === val);
    const inSet2 = set2.filter((comp) => comp === val);

    if (set1.indexOf(val) !== -1 && set2.indexOf(val) !== -1) {
      if (inSet1.length > inSet2.length) {
        and = [...and, ...inSet2];
        or = [...or, ...inSet1];
      } else {
        and = [...and, ...inSet1];
        or = [...or, ...inSet2];
      }
    } else {
      or = [...or, ...inSet1, ...inSet2];
    }
  });

  answer = parseInt((and.length / or.length) * 65536);

  return answer;
}
