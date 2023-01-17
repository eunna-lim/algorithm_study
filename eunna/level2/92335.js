// Number.toString(k) : k진수로 표현하는 함수 (생각 못 하고 직접 구현함...)
function solution(n, k) {
  var answer = 0;

  function isPrimeNumber(num) {
    if (num === 1) return false;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function convert(num, k) {
    let p = [];
    let tmp = num;
    while (tmp > 0) {
      p.push(tmp % k);
      tmp = parseInt(tmp / k);
    }
    return p.reverse().join("");
  }

  const newN = convert(n, k);
  const nums = newN.split("0").map((str) => parseInt(str));

  nums.forEach((num) => {
    if (isPrimeNumber(num) && !isNaN(num)) answer++;
  });

  return answer;
}
