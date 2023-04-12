function solution(n) {
  var answer = [];
  const len = ((1 + n) * n) / 2;
  const arr = Array.from({ length: n }, (_, i) => new Array(i + 1).fill(0));
  let r = n - 1,
    c = 1;

  arr.forEach((row, i) => {
    row[0] = i + 1;
  });

  // 0 -> 오른쪽, 1 -> 위, 2 -> 아래
  let cur = 0;

  for (let num = n + 1; num <= len; num++) {
    if (cur === 0) {
      arr[r][c++] = num;

      if (c === arr[r].length || arr[r][c]) {
        cur = 1;
        c -= 2;
        r--;
      }
    } else if (cur === 1) {
      arr[r--][c--] = num;

      if (arr[r][c]) {
        cur = 2;
        r += 2;
        c++;
      }
    } else {
      arr[r++][c] = num;

      if (arr[r][c]) {
        cur = 0;
        r--;
        c++;
      }
    }
  }
  answer = arr.flat();

  return answer;
}
