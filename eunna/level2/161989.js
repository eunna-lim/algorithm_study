/*
// 정확성 : 48 / 50 (96.0 / 100.0)
// 테스트케이스 17, 35번 실패
function solution(n, m, section) {
  var answer = 0;
  while (section.length) {
    const right = section.pop();
    const left = right - m + 1;

    section = section.filter((val) => val < left);
    answer++;
  }
  return answer;
}
*/

function solution(n, m, section) {
  var answer = 0;
  while (section.length) {
    const right = section.pop();
    const left = right - m + 1;

    while (section.length) {
      const pos = section[section.length - 1];
      if (pos < left) break;
      else section.pop();
    }

    answer++;
  }
  return answer;
}
