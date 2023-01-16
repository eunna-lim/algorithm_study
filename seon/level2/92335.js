function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let answer = 0;
  const number = n.toString(k);
  const splitedByZero = number.split("0");

  splitedByZero.forEach((number) => {
    if (isPrime(Number(number))) answer += 1;
  });

  return answer;
}
