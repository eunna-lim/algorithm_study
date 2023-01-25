function getPermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((val) => [val]);

  let results = [];
  arr.forEach((val, idx, arr) => {
    const fixed = val;
    const rest = arr.filter((_, index) => index !== idx);

    const permutations = getPermutations(rest, selectNum - 1);
    results.push(...permutations.map((perm) => [fixed, ...perm]));
  });
  return results;
}

function solution(k, dungeons) {
  var answer = -1;
  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach((perm) => {
    let power = k;
    let count = 0;
    for (let i = 0; i < perm.length; i++) {
      if (power <= 0) break;

      const [minPower, consumption] = perm[i];

      if (power < minPower) continue;
      else {
        power -= consumption;
        count++;
      }
    }
    answer = answer < count ? count : answer;
  });

  return answer;
}
