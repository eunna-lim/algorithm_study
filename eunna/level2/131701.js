/*
// 정확성 : 18 / 20 (90.0 / 100.0);
// 테스트케이스 10, 20번 시간 초과로 실패
function solution(elements) {
  var answer = 0;
  let results = [];
  let tmp = elements.map((val, idx) => [[val], idx]);

  for (let i = 1; i <= elements.length; i++) {
    tmp.forEach(([arr]) => {
      const sum = arr.reduce((acc, val) => acc + val);
      results.push(sum);
    });

    tmp.forEach(([arr, idx], index) => {
      const nextIdx = idx + 1 === elements.length ? (idx = 0) : idx + 1;
      tmp[index] = [[...arr, elements[nextIdx]], nextIdx];
    });
  }
  answer = new Set(results).size;

  return answer;
}
*/

function solution(elements) {
  var answer = 0;
  let results = [];
  let tmp = elements.map((val, idx) => [[val], idx]);

  for (let i = 1; i <= elements.length; i++) {
    tmp.forEach(([arr, idx], index) => {
      const sum = arr.reduce((acc, val) => acc + val);
      results.push(sum);
      const nextIdx = idx + 1 === elements.length ? (idx = 0) : idx + 1;
      tmp[index] = [[...arr, elements[nextIdx]], nextIdx];
    });
  }
  answer = new Set(results).size;

  return answer;
}

// circularQueue처럼 쓸 수 있도록 elements를 두 개 연달아 붙여서 사용할 수 있음
// 시간이 더 줄어듦
function solution(elements) {
  var answer = 0;
  let results = new Set();
  const circular = elements.concat(elements);

  for (let len = 1; len <= elements.length; len++) {
    for (let index = 0; index < elements.length; index++) {
      results.add(
        circular.slice(index, index + len).reduce((acc, val) => acc + val)
      );
    }
  }
  answer = results.size;

  return answer;
}
