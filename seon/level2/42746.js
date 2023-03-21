// 11번 tc 실패
// 반례 [0,0,0] => 0
// function solution(numbers) {
//   return numbers
//     .map(String)
//     .sort((a, b) => b + a - (a + b))
//     .join("");
// }

function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");

  return Number(answer) ? answer : "0";
}
