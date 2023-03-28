function getQuartered(arr) {
  const end = arr.length;
  const mid = end / 2;
  const result = Array.from({ length: 4 }, () => []);

  for (let i = 0; i < mid; i++) {
    result[0].push(arr[i].slice(0, mid));
    result[1].push(arr[i].slice(mid));
  }

  for (let i = mid; i < end; i++) {
    result[2].push(arr[i].slice(0, mid));
    result[3].push(arr[i].slice(mid));
  }

  return result;
}

function solution(arr) {
  if (arr.length === 2) {
    const sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1];
    return [sum === 0 ? 1 : 4 - sum, sum === 4 ? 1 : sum];
  }

  let sum0 = 0;
  let sum1 = 0;
  for (const quarteredArr of getQuartered(arr)) {
    const [zeroNum, oneNum] = solution(quarteredArr);
    sum0 += zeroNum;
    sum1 += oneNum;
  }
  const all0 = sum0 === 4 && sum1 === 0;
  const all1 = sum0 === 0 && sum1 === 4;

  return [all0 ? 1 : sum0, all1 ? 1 : sum1];
}
