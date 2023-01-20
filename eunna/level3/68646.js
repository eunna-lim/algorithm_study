/*
// 정확성 : 4 / 15 (26.7 / 100.0)
// 테스트케이스 1~4만 통과, 나머지는 런타임 에러
function solution(a) {
  var answer = 0;
  // i번쩨 숫자의 왼쪽 min > i번째 숫자 || i번째 숫자 오른쪽 min > i번째 숫자
  // 왼쪽이 없거나 오른쪽이 없으면 무조건 가능!(0번째, a.length - 1번째)

  let leftMin = 1000000000,
    rightMin = Math.min(...a.slice());
  a.forEach((num, idx) => {
    if (idx === 0 || idx === a.length - 1) {
      answer++;
    } else {
      if (leftMin >= num || rightMin >= num) {
        answer++;
      }
    }
    leftMin = leftMin > num ? num : leftMin;
    rightMin =
      rightMin === num && idx < a.length - 1
        ? Math.min(...a.slice(idx + 1))
        : rightMin;
  });

  return answer;
}
*/

function solution(a) {
  var answer = 0;
  // i번쩨 숫자의 왼쪽 min > i번째 숫자 || i번째 숫자 오른쪽 min > i번째 숫자
  // 왼쪽이 없거나 오른쪽이 없으면 무조건 가능!(0번째, a.length - 1번째)

  let possible = [];
  let leftMin = 1000000000;
  a.forEach((num, idx) => {
    if (idx === 0 || idx === a.length - 1) {
      answer++;
    } else {
      if (leftMin >= num) {
        possible.push(num);
      }
    }
    leftMin = leftMin > num ? num : leftMin;
  });

  let rightMin = a[a.length - 1];
  for (let i = a.length - 2; i > 0; i--) {
    const num = a[i];
    if (rightMin >= num) {
      possible.push(num);
    }

    rightMin = rightMin > num ? num : rightMin;
  }

  answer += new Set(possible).size;

  return answer;
}
