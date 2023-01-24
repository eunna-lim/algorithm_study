function solution(k, dungeons) {
  if (dungeons.length === 0) return 0;

  const filtered = dungeons.filter(([minRequiredK, _]) => minRequiredK <= k);

  let count = 0;
  filtered.forEach(([_, consumeK], i, origin) => {
    const subDungeons = origin.filter((_, j) => i !== j);
    const subCount = solution(k - consumeK, subDungeons);
    count = Math.max(count, subCount + 1);
  });

  return count;
}
