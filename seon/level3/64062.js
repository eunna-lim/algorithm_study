// 정확성 테스트 통과, 효율성 테스트 통과X
// function solution(stones, k) {
//   let ans = 200000000;

//   for (let i = 0; i <= stones.length - k; i++) {
//     let max = 0;
//     for (let j = i; j < i + k; j++) max = Math.max(max, stones[j]);

//     ans = Math.min(ans, max);
//   }

//   return ans;
// }

function canCross(stones, n, k) {
  let cnt = 0;
  for (let stone of stones) {
    if (stone <= n) cnt += 1;
    else cnt = 0;
    if (cnt === k) return true;
  }
  return false;
}

// 이분탐색
function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (canCross(stones, mid, k)) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
