function getPermutations(n, arr) {
  if (n === 1) return arr.map((val) => val);

  const result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.filter((_, idx) => idx !== index);
    const perms = getPermutations(n - 1, rest);
    result.push(...perms.map((perm) => fixed + perm));
  });

  return result;
}

function isPrimeNumber(num) {
  if (num < 2) return false;
  else if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  var answer = 0;
  const primeNums = new Set();

  for (let n = 1; n <= numbers.length; n++) {
    const perms = Array.from(new Set(getPermutations(n, numbers.split(""))));
    perms.forEach((str) => {
      const num = parseInt(str);
      if (isPrimeNumber(num)) primeNums.add(num);
    });
  }
  answer = primeNums.size;

  return answer;
}
