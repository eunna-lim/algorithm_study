// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%8A%A4%ED%83%80-%EC%88%98%EC%97%B4-JS 풀이 참고

function solution(a) {
  var answer = 0;
  // 가장 많이 사용된 원소를 기준으로 집합을 만듦
  if (a.length < 2) return 0;

  const countsObj = {};
  a.forEach((num) => {
    countsObj[num] ? countsObj[num]++ : (countsObj[num] = 1);
  });

  const counts = Object.entries(countsObj)
    .map((arr) => [parseInt(arr[0]), arr[1]])
    .sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < counts.length; i++) {
    // 가능한 스타 수열의 최대 개수만 찾는 것이 목표
    if (answer >= counts[i][1]) continue;

    let cnt = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j + 1] === undefined) break;
      else if (a[j] === a[j + 1]) continue;
      else if (a[j] !== counts[i][0] && a[j + 1] !== counts[i][0]) continue;

      cnt++;
      j++;
    }
    answer = Math.max(answer, cnt);
  }

  return answer * 2;
}
