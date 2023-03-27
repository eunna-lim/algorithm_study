function getPermutation(str, r) {
  const result = new Set([]);

  if (r === 1) {
    for (let s of str) {
      result.add(s);
    }
    return [...result];
  }

  for (let i = 0; i < str.length; i++) {
    const fixed = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);
    const permutation = getPermutation(rest, r - 1);
    permutation.forEach((p) => result.add(fixed + p));
  }

  return [...result];
}

function isPrime(str) {
  if (str[0] === "0" || str === "1") return false;
  if (str === "2") return true;

  const number = Number(str);
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(numbers) {
  const allPermutation = [];
  for (let i = 1; i < numbers.length + 1; i++) {
    const permutation = getPermutation(numbers, i);
    allPermutation.push(...permutation);
  }

  let answer = 0;
  for (let num of allPermutation) {
    if (isPrime(num)) answer += 1;
  }

  return answer;
}
