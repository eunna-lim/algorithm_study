/*
// 정확성 : 10 / 13
// 테스트케이스 11, 13번 런타임 에러, 12번 시간 초과
function solution(enroll, referral, seller, amount) {
  var answer = [];
  let sell = {};
  enroll.forEach((name, idx) => {
    sell[name] = 0;
    referralMatch[name] = referral[idx];
  });

  function findReferral(name, money) {
    const idx = enroll.indexOf(name);
    const referralMoney = parseInt(money * 0.1);
    sell[name] += money - referralMoney;
    if (referral[idx] !== "-")
      findReferral(referralMatch[name], referralMoney);
  }

  for (let i = 0; i < seller.length; i++) {
    findReferral(seller[i], amount[i] * 100);
  }

  enroll.forEach((name) => {
    answer.push(sell[name]);
  });

  return answer;
}
*/

/*
// 정확성 : 10 / 13
// 테스트케이스 11, 12, 13번 시간 초과
function solution(enroll, referral, seller, amount) {
  var answer = [];
  let sell = {};
  enroll.forEach((name, idx) => {
    sell[name] = 0;
    referralMatch[name] = referral[idx];
  });

  function findReferral(name, money) {
    const idx = enroll.indexOf(name);
    const referralMoney = parseInt(money * 0.1);
    sell[name] += money - referralMoney;
    if (enroll[idx] !== "-" && referralMoney > 0)
      findReferral(referralMatch[name], referralMoney);
  }

  for (let i = 0; i < seller.length; i++) {
    findReferral(seller[i], amount[i] * 100);
  }

  enroll.forEach((name) => {
    answer.push(sell[name]);
  });

  return answer;
}
*/

function solution(enroll, referral, seller, amount) {
  var answer = [];
  let sell = {};
  let referralMatch = {};
  enroll.forEach((name, idx) => {
    sell[name] = 0;
    referralMatch[name] = referral[idx];
  });

  function findReferral(name, money) {
    const referralMoney = parseInt(money * 0.1);
    sell[name] += money - referralMoney;
    if (referralMatch[name] !== "-" && referralMoney > 0)
      findReferral(referralMatch[name], referralMoney);
  }

  for (let i = 0; i < seller.length; i++) {
    findReferral(seller[i], amount[i] * 100);
  }

  enroll.forEach((name) => {
    answer.push(sell[name]);
  });

  return answer;
}
