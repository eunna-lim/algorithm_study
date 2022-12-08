/*
// 0번째 스티커를 뜯을 경우와 1번째 스티커를 뜯을 경우로 나누어 생각
// 합계 10.6 / 100.0
function solution(sticker) {
  var answer = 0;

  if (sticker.length === 1) return sticker[0];

  let sum = [sticker[0], sticker[1], sticker[2]];
  let idx = 2;

  while (idx < sticker.length - 1) {
    if (sticker[idx] + sticker[idx + 2] > sticker[idx + 1]) {
      sum[0] = sum[0] + sticker[idx];
      idx = idx + 2;
    } else {
      sum[0] = sum[0] + sticker[idx + 1];
      idx = idx + 3;
    }
  }

  idx = 3;
  while (idx <= sticker.length - 2) {
    if (idx === sticker.length - 2) {
      sum[1] = sum[1] + Math.max(sticker[idx], sticker[idx + 1]);
      break;
    }

    if (sticker[idx] + sticker[idx + 2] > sticker[idx + 1]) {
      sum[1] = sum[1] + sticker[idx];
      idx = idx + 2;
    } else {
      sum[1] = sum[1] + sticker[idx + 1];
      idx = idx + 3;
    }
  }

  if (idx === sticker.length - 1) sum[1] = sum[1] + sticker[idx];

  answer = Math.max(...sum);
  return answer;
}
*/

// 동적 계획법으로 풀어야하는 문제
// 0번째 스티커를 뜯는 경우와 1번째 스티커를 뜯는 경우를 구분하여 풀이할 것!
function solution(sticker) {
  var answer = 0;

  if (sticker.length === 1) return sticker[0];
  else if (sticker.length === 2) return Math.max(sticker[0], sticker[1]);

  // 0번째 스티커를 뜯은 경우
  let dp0 = [sticker[0], sticker[0]];
  for (let i = 2; i < sticker.length - 1; i++) {
    dp0.push(Math.max(sticker[i] + dp0[i - 2], dp0[i - 1]));
  }

  // 1번째 스티커를 뜯은 경우
  let dp1 = [0, sticker[1]];
  for (let i = 2; i < sticker.length; i++) {
    dp1.push(Math.max(sticker[i] + dp1[i - 2], dp1[i - 1]));
  }

  answer = Math.max(dp0[dp0.length - 1], dp1[dp1.length - 1]);

  return answer;
}
