function solution(s) {
  let answer = 1;
  const ref = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false)
  );

  ref.forEach((_, idx) => {
    ref[idx][idx] = true;
    if (s[idx] === s[idx + 1]) {
      ref[idx][idx + 1] = true;
      answer = 2;
    }
  });

  for (let gap = 2; gap < s.length; gap++) {
    for (let from = 0; from < s.length - gap; from++) {
      const to = from + gap;
      if (s[from] === s[to] && ref[from + 1][to - 1]) {
        ref[from][to] = true;
        answer = Math.max(answer, gap + 1);
      }
    }
  }

  return answer;
}
