function solution(s) {
  let cnt = 0;

  for (let bracket of s) {
    cnt += bracket === "(" ? 1 : -1;

    if (cnt < 0) return false;
  }

  return cnt === 0;
}
