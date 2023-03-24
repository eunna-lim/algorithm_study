/*
// 정확성 : 10 / 14 (50.0)
// 효율성 : 0 / 6 (0.0) - 전체 시간 초과
// 합계 : 50.0 / 100.0
function solution(n, cores) {
  var answer = 0;
  let cnt = 0;
  let time = Math.min(...cores);

  cnt += cores.length;
  while (cnt < n) {
    const done = cores.filter((core) => time % core === 0);
    cnt += done.length;
    time++;

    if (cnt >= n) {
      answer = cores.indexOf(done[done.length - 1 - (cnt - n)]) + 1;
      break;
    }
  }

  return answer;
}
*/

/*
// 정확성 : 14 / 14 (70.0)
// 효율성 : 5 / 6 (25.0)
// 합계 : 95.0 / 100.0
// https://school.programmers.co.kr/questions/20238 참고
// 이분 탐색 시 N을 기준으로 시간 탐색
// 효율성 테스트케이스 4번 실패
function solution(n, cores) {
  let start = 0,
    end = Number.MAX_SAFE_INTEGER;
  let cnt;

  while (start + 1 < end) {
    const mid = parseInt((start + end) / 2);

    cnt = cores.length;
    cores.forEach((core, idx) => {
      cnt += parseInt(mid / core);
    });

    if (cnt >= n) end = mid;
    else start = mid;
  }

  cnt = cores.length;
  cores.forEach((core) => {
    cnt += parseInt(start / core);
  });

  for (let i = 0; i < cores.length; i++) {
    if (end % cores[i] === 0) cnt++;
    if (cnt === n) return i + 1;
  }
}
*/

function solution(n, cores) {
  let start = 0,
    end = 2e7;
  let cnt;

  while (start + 1 < end) {
    const mid = parseInt((start + end) / 2);

    cnt = cores.length;
    cores.forEach((core, idx) => {
      cnt += parseInt(mid / core);
    });

    if (cnt >= n) end = mid;
    else start = mid;
  }

  cnt = cores.length;
  cores.forEach((core) => {
    cnt += parseInt(start / core);
  });

  for (let i = 0; i < cores.length; i++) {
    if (end % cores[i] === 0) cnt++;
    if (cnt === n) return i + 1;
  }
}
