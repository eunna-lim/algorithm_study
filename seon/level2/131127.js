function solution(want, number, discount) {
  const wantDict = {};
  for (let i = 0; i < want.length; i++) {
    wantDict[want[i]] = number[i];
  }

  const isPossible = (discountItems) => {
    const discountDict = {};
    discountItems.forEach((item) => {
      discountDict[item] = (discountDict[item] || 0) + 1;
    });

    for (const wantItem of want) {
      if (wantDict[wantItem] !== discountDict[wantItem]) return false;
    }
    return true;
  };

  let answer = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    if (isPossible(discount.slice(i, i + 10))) answer += 1;
  }

  return answer;
}
