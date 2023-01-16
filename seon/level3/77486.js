// tc6~13 시간초과
// TODO: 다시풀기
function solution(enroll, referral, sellers, amount) {
  const memberInfo = enroll.reduce((prev, member, index) => {
    return {
      ...prev,
      [member]: { index, referral: referral[index], profit: 0 },
    };
  }, {});

  sellers.forEach((seller, idx) => {
    let profit = amount[idx] * 100;
    let curSeller = seller;

    while (profit >= 1 && curSeller !== "-") {
      if (profit < 10) memberInfo[curSeller].profit += profit;
      else memberInfo[curSeller].profit += profit - Math.floor(profit * 0.1);

      profit = Math.floor(profit * 0.1);
      curSeller = memberInfo[curSeller].referral;
    }
  });

  const answer = new Array(memberInfo.length);
  Object.values(memberInfo).forEach(({ index, profit }) => {
    answer[index] = profit;
  });

  return answer;
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
