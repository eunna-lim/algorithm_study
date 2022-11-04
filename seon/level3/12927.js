function solution(n, works) {
  works.sort((a, b) => b - a);
  works[works.length] = 0;

  while (n) {
    let idx = 0;
    while (idx < works.length - 1) {
      if (works[idx] <= works[idx + 1]) {
        idx += 1;
      } else break;
    }

    for (let i = idx; i >= 0; i--) {
      works[i] -= 1;
      n -= 1;
      if (!n) break;
    }

    if (!works[0]) return 0;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
