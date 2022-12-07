/*
// k개로 나눈 덩이의 가장 큰 값 중 가장 작은 값을 고르고자 함.
// 정확성 10 / 25 => 25.6
// 효율성 9 / 14 => 23.1
// 합계: 48.7 / 100.0
function solution(stones, k) {
    var answer = 0;
    let min = Infinity;
    
    for (let i = 0; i < stones.length / k; i++) {
        const chunk = stones.slice(i * k, i * k + k);
        if (chunk.length < k) break;
        
        const max = Math.max(...chunk);
        min = min > max ? max : min;
    }
    answer = min;
    return answer;
}
*/

/*
// 슬라이딩 윈도우로 풀이
// 정확성 전체 맞춤. 효율성은 한 개 틀림(테스트케이스 13번).
// 합계: 97.4 / 100.0
function solution(stones, k) {
  var answer = 0;
  let min = Infinity;
  let before = -1;

  while (true) {
    let chunk = stones.slice(before + 1, before + 1 + k);
    if (chunk.length < k) break;
    const max = Math.max(...chunk);
    before = before + chunk.indexOf(max) + 1;
    min = min > max ? max : min;
  }

  answer = min;
  return answer;
}
*/

function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  // 건널 수 있는 친구의 수를 이분탐색으로 구함

  // 디딤돌 숫자 <= 친구의 수 : 건널 수 없음
  // 디딤돌 숫자 > 친구의 수 : 건널 수 있음
  // 건널 수 없는 연속적인 디딤돌 개수가 k보다 크거나 같을 경우 -> 친구의 수를 줄임. (right = mid - 1)
  // 건널 수 없는 연속적인 디딤돌 개수가 k보다 작을 경우 -> 친구의 수를 늘림. (left = mid + 1)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let arr = stones.slice();

    let count = 0; // 연속적인 디딤돌 개수를 세기 위한 변수

    for (let i = 0; i < stones.length; i++) {
      if (arr[i] <= mid) count++;
      else count = 0;

      if (count === k) break;
    }

    if (count === k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
