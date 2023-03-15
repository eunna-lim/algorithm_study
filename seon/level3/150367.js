function getSaturatedTree(binary) {
  if (binary.length === 1) return binary;

  let i = 0;
  let treeLength = 1;
  while (true) {
    if (treeLength < binary.length && binary.length <= treeLength + 2 ** (i + 1)) {
      const gap = treeLength + 2 ** (i + 1) - binary.length;
      return "0".repeat(gap) + binary;
    }
    treeLength += 2 ** (i++ + 1);
  }
}

function isAllZero(binary) {
  for (let number of binary) {
    if (number === "1") return false;
  }
  return true;
}

function isPossible(binary) {
  if (binary.length === 1 || isAllZero(binary)) return true;

  const mediumIndex = Math.floor(binary.length / 2);
  if (binary[mediumIndex] === "0") return false;

  return isPossible(binary.substring(0, mediumIndex)) && isPossible(binary.substring(mediumIndex + 1));
}

function solution(numbers) {
  const answer = [];

  for (const number of numbers) {
    const binary = number.toString(2);
    const saturatedTree = getSaturatedTree(binary);

    answer.push(isPossible(saturatedTree) ? 1 : 0);
  }

  return answer;
}
