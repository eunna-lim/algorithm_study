function getGCF(lowNum, highNum) {
  if (!(highNum % lowNum)) return lowNum;

  const remain = highNum % lowNum;
  return getGCF(remain, lowNum);
}

function getLCM(lowNum, highNum) {
  const GCF = getGCF(lowNum, highNum);

  return (lowNum * highNum) / GCF;
}

function solution(arr) {
  let ans = 1;

  arr.forEach((num) => {
    ans = getLCM(Math.min(ans, num), Math.max(ans, num));
  });

  return ans;
}
