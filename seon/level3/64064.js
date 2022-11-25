function isSameId(id, maskedId) {
  if (id.length !== maskedId.length) return false;

  for (let i = 0; i < id.length; i++) {
    if (maskedId[i] === "*") continue;
    if (id[i] !== maskedId[i]) return false;
  }

  return true;
}

function getPermutation(arr, r) {
  if (r === 1) return arr.map((num) => [num]);

  const permutation = [];
  arr.forEach((element, index, origin) => {
    const rest = origin.filter((_, idx) => idx !== index);
    const subPermutation = getPermutation(rest, r - 1);
    subPermutation.forEach((p) => permutation.push([element, ...p]));
  });

  return permutation;
}

function solution(userIds, bannedIds) {
  const permutation = getPermutation(userIds, bannedIds.length);

  let answer = new Set();
  for (let p of permutation) {
    let isAllSame = true;
    for (let idx = 0; idx < bannedIds.length; idx++) {
      if (!isSameId(p[idx], bannedIds[idx])) {
        isAllSame = false;
        break;
      }
    }

    if (isAllSame) {
      answer.add(p.sort().join(""));
    }
  }

  return answer.size;
}
