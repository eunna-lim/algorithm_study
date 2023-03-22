/*
// 정확성 : 8 / 15 (53.3 / 100.0)
// 테스트케이스 1~6, 11 실패
function solution(numbers) {
  var answer = "";
  numbers.sort((a, b) => {
    const strA = a.toString();
    const strB = b.toString();

    if (strA[0] < strB[0]) return 1;
    else if (strA[0] === strB[0]) {
      if (strA.length < strB.length) {
        for (let i = 1; i < strA.length; i++) {
          if (strA[i] < strB[i]) return 1;
        }
        if (strA[strA.length - 1] < strB[strA.length]) return 1;
        else return -1;
      } else {
        for (let i = 1; i < strB.length; i++) {
          if (strB[i] < strA[i]) return -1;
        }
        if (strB[strB.length - 1] < strA[strB.length]) return -1;
        else return 1;
      }
    } else return -1;
  });

  numbers.forEach((num) => {
    answer += num.toString();
  });

  return answer;
}
*/

// 정확성 : 14 / 15 (93.3 / 100.0)
// 테스트케이스 11번 틀림
function solution(numbers) {
  var answer = "";
  numbers.sort((a, b) => {
    const strA = a.toString();
    const strB = b.toString();

    const ab = parseInt(strA + strB);
    const ba = parseInt(strB + strA);

    if (ab > ba) return -1;
    else return 1;
  });

  numbers.forEach((num) => {
    answer += num.toString();
  });

  if (answer[0] === "0") return "0";

  return answer;
}
