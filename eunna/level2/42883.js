/*
// 정확성 : 11 / 12 (91.7 / 100.0)
// 테스트케이스 10 시간 초과
function solution(number, k) {
  var answer = "";

  for (let i = 0; i < k; i++) {
    let isSliced = false;
    for (let j = 0; j < number.length - 1; j++) {
      if (number[j] < number[j + 1]) {
        number = number.substr(0, j) + number.substr(j + 1);
        isSliced = true;
        break;
      }
    }
    if (!isSliced) number = number.substr(0, number.length - 1);
  }

  answer = number;
  return answer;
}
*/

/*
// 정확성 : 11 / 12 (91.7 / 100.0)
// 테스트케이스 10 시간 초과, 그러나 전체 실행 시간은 줄임
function solution(number, k) {
  var answer = "";

  let idx = 0;
  while (k > 0) {
    if (number[idx] < number[idx + 1]) {
      number = number.substr(0, idx) + number.substr(idx + 1);
      idx--;
      k--;
    } else {
      idx++;
    }

    if (idx === number.length - 1) break;
  }
  if (k > 0) {
    number = number.substr(0, number.length - k);
  }

  answer = number;
  return answer;
}
*/

// https://school.programmers.co.kr/questions/8430 참고
// 무조건 number.length - k개의 숫자로 이루어져야하기 때문에 0 ... k - 1 사이부터 순차적으로 돌면서 확인
// 가장 큰 값 찾으면 큰 값 바로 뒤 숫자부터 확인!
function solution(number, k) {
  const len = number.length;
  let answer = "",
    startIdx = 0,
    maxChar,
    maxIdx = 0;

  for (let i = len - k; i > 0; i--) {
    maxChar = "0";

    for (let j = startIdx; j <= len - i; j++) {
      if (number[j] > maxChar) {
        maxIdx = j;
        maxChar = number[j];
        if (maxChar === "9") {
          break;
        }
      }
    }

    answer += maxChar;
    startIdx = maxIdx + 1;
  }

  return answer;
}
