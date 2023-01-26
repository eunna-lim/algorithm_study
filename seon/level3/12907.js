// 정확성 통과, 효율성 실패
// function findCaseNumber(n, money) {
//   if (money.length === 1) {
//     return n % money[0] === 0 ? 1 : 0;
//   }

//   const maxNumber = money.pop();

//   let caseNumber = 0;
//   for (let i = 0; i <= Math.floor(n / maxNumber); i++) {
//     caseNumber += solution(n - i * maxNumber, [...money]);
//   }

//   return caseNumber;
// }

// function solution(n, money) {
//   money.sort((a, b) => a - b);

//   let answer = findCaseNumber(n, money);

//   return answer % 1000000007;
// }

function solution(n, moneyList) {
  const changes = new Array(n).fill(0);
  changes.unshift(1);

  moneyList.forEach((money) => {
    for (let change = 0; change <= n; change++) {
      changes[change] += change >= money ? changes[change - money] : 0;
    }
  });

  return changes[n] % 1000000007;
}
