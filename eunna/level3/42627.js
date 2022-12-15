/*
// 정확성 12 / 20 (60.0 / 100.0)
function solution(jobs) {
  var answer = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  let endTime = jobs[0][0] + jobs[0][1];
  let time = endTime;

  let rest = jobs.slice();
  rest.splice(0, 1);

  while (rest.length) {
    // 이전 작업이 끝난 시간 < 현 작업 요청 시간 == 현 작업 요청 시간 + 현 작업 소요 시간
    // 이전 작업이 끝난 시간 > 현 작업 요청 시간 == 이전 작업이 끝난 시간 + 현 작업 소요 시간

    // 작업 종료 시간 이전에 요청 온 작업들 찾기
    const requests = rest.filter((job) => job[0] <= endTime);
    if (requests.length > 0) {
      // 가장 짧은 요청부터 처리
      requests.sort((a, b) => a[1] - b[1]);
      const shortest = requests[0];
      endTime += shortest[1];

      // answer += (작업 완료 시간 - 작업 요청 시간)
      time += endTime - shortest[0];
      rest.splice(rest.indexOf(shortest), 1);
    } else {
      const next = rest.shift();
      endTime = next[0] + next[1];

      time += next[1];
    }
  }

  answer = parseInt(time / jobs.length);
  return answer;
}
*/

/*
// 정확성 18 / 20 (90.0 / 100.0)
function solution(jobs) {
  var answer = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  let endTime = jobs[0][0] + jobs[0][1];
  let time = jobs[0][1];

  let rest = jobs.slice();
  rest.splice(0, 1);

  while (rest.length) {
    // 이전 작업이 끝난 시간 < 현 작업 요청 시간 == 현 작업 요청 시간 + 현 작업 소요 시간
    // 이전 작업이 끝난 시간 > 현 작업 요청 시간 == 이전 작업이 끝난 시간 + 현 작업 소요 시간

    // 작업 종료 시간 이전에 요청 온 작업들 찾기
    const requests = rest.filter((job) => job[0] <= endTime);
    if (requests.length > 0) {
      // 가장 짧은 요청부터 처리
      requests.sort((a, b) => a[1] - b[1]);
      const shortest = requests[0];
      endTime += shortest[1];

      // answer += (작업 완료 시간 - 작업 요청 시간)
      time += endTime - shortest[0];
      rest.splice(rest.indexOf(shortest), 1);
    } else {
      const next = rest.shift();
      endTime = next[0] + next[1];

      time += next[1];
    }
  }

  answer = parseInt(time / jobs.length);
  return answer;
}
*/

// 시작 시간이 같을 경우에는 작업 시간이 짧은 것 먼저 실행하도록 한다! ** 조건 주의
function solution(jobs) {
  var answer = 0;
  jobs.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  let endTime = 0;
  let time = 0;
  let rest = jobs.slice();

  while (rest.length) {
    // 이전 작업이 끝난 시간 < 현 작업 요청 시간 == 현 작업 요청 시간 + 현 작업 소요 시간
    // 이전 작업이 끝난 시간 > 현 작업 요청 시간 == 이전 작업이 끝난 시간 + 현 작업 소요 시간

    // 작업 종료 시간 이전에 요청 온 작업들 찾기
    const requests = rest.filter((job) => job[0] <= endTime);
    if (requests.length > 0) {
      // 가장 짧은 요청부터 처리
      requests.sort((a, b) => a[1] - b[1]);
      const shortest = requests[0];
      endTime += shortest[1];

      // answer += (작업 완료 시간 - 작업 요청 시간)
      time += endTime - shortest[0];
      rest.splice(rest.indexOf(shortest), 1);
    } else {
      const next = rest.shift();
      endTime = next[0] + next[1];

      time += next[1];
    }
  }

  answer = parseInt(time / jobs.length);
  return answer;
}
