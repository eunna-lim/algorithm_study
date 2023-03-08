/*
// 정확성 : 18 / 25 (72.0 / 100.0)
function solution(scores) {
  var answer = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[0][0] < scores[i][0] && scores[0][1] < scores[i][1]) return -1;
  }

  const newScores = scores.map((score, idx) => [...score, idx]);
  newScores.sort((a, b) => b[0] + b[1] - (a[0] + a[1]) || a[2] - b[2]);

  for (let i = 0; i < newScores.length; i++) {
    if (newScores[i][2] === 0) return i + 1;
  }
}
*/

/*
// 정확성 : 20 / 25 (80.0 / 100.0)
function solution(scores) {
  var answer = 0;
  let score0Max = [...scores[0], 0],
    score1Max = [...scores[0], 0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[score0Max[2]][0] < scores[i][0]) score0Max = [...scores[i], i];
    if (scores[score1Max[2]][1] < scores[i][1]) score1Max = [...scores[i], i];

    if (scores[0][0] < scores[i][0] && scores[0][1] < scores[i][1]) return -1;
  }

  const newScores = scores.map((score, idx) => [...score, idx]);
  newScores.sort(
    (a, b) =>
      b[0] + b[1] - (a[0] + a[1]) || b[0] - a[0] || b[1] - a[1] || a[2] - b[2]
  );

  let failure = 0;

  for (let i = 0; i < newScores.length; i++) {
    if (
      (newScores[i][0] < newScores[0][0] &&
        newScores[i][1] < newScores[0][1]) ||
      (newScores[i][0] < scores[score0Max[2]][0] &&
        newScores[i][1] < scores[score0Max[2]][1]) ||
      (newScores[i][0] < scores[score1Max[2]][0] &&
        newScores[i][1] < scores[score1Max[2]][1])
    )
      failure++;

    if (newScores[i][2] === 0) return i + 1 - failure;
  }
}
*/

// https://school.programmers.co.kr/questions/42820 풀이 참고
// 점수 한 개에 대해서 내림차순을 한 후, 다른 점수에 대 오름차순으로 정렬하여 비교 기준을 한 개로 줄임.
function solution(scores) {
  var answer = 0;

  const newScores = scores.slice();
  newScores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const wanho = scores[0].slice();
  const wanhoSum = scores[0][0] + scores[0][1];

  let maxScore = 0;
  for (const score of newScores) {
    if (score[1] < maxScore) {
      if (score[0] === wanho[0] && score[1] === wanho[1]) return -1;
    } else {
      maxScore = maxScore < score[1] ? score[1] : maxScore;

      if (score[0] + score[1] > wanhoSum) answer++;
    }
  }

  // 완호 등수 => (완호 앞에 있는 인원 수 + 1)
  return answer + 1;
}
