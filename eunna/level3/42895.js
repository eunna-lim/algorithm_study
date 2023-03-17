/*
// 정확성 : 8 / 9 (88.9 / 100.0)
// 테스트케이스 9번 틀림
function solution(N, number) {
  let dp = Array.from({ length: 9 }, () => []);
  dp[0] = [0];
  dp[1].push(N);
  for (let i = 2; i <= 8; i++) {
    let arr = [parseInt(N.toString().repeat(i))];
    for (let j = 1; j < i; j++) {
      dp[j].forEach((val1) => {
        dp[i - j].forEach((val2) => {
          arr.push(
            val1 + val2,
            val1 * val2,
            parseInt(val1 / val2),
            val1 - val2
          );
        });
      });
    }
    if (arr.indexOf(number) > -1) return i;
    dp[i] = arr.slice();
  }

  return -1;
}
*/

function solution(N, number) {
  let dp = Array.from({ length: 9 }, () => []);
  if (N === number) return 1;

  dp[0] = [0];
  dp[1].push(N);
  for (let i = 2; i <= 8; i++) {
    let arr = [parseInt(N.toString().repeat(i))];
    for (let j = 1; j < i; j++) {
      dp[j].forEach((val1) => {
        dp[i - j].forEach((val2) => {
          arr.push(
            val1 + val2,
            val1 * val2,
            parseInt(val1 / val2),
            val1 - val2
          );
        });
      });
    }
    if (arr.indexOf(number) > -1) return i;
    dp[i] = arr.slice();
  }

  return -1;
}
