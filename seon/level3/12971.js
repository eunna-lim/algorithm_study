function solution(sticker) {
  if (sticker.length <= 2) return Math.max(...sticker);

  const typeA = sticker.slice(0, sticker.length - 1);
  const numberA = [typeA[0], Math.max(typeA[0], typeA[1])];

  const typeB = sticker.slice(1);
  const numberB = [typeB[0], Math.max(typeB[0], typeB[1])];

  for (let i = 2; i < typeA.length; i++) {
    numberA[i] = Math.max(numberA[i - 1], numberA[i - 2] + typeA[i]);
    numberB[i] = Math.max(numberB[i - 1], numberB[i - 2] + typeB[i]);
  }

  return Math.max(numberA[numberA.length - 1], numberB[numberB.length - 1]);
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
