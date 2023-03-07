/*
// 정확성 : 15 / 25 (60.0 / 100.0)
function solution(n, weak, dist) {
  const len = weak.length;

  // 원형 구조를 위해 각 자리에 n만큼 더한 값을 추가
  weak.forEach((val) => {
    weak.push(val + n);
  });
  weak.pop();

  dist.sort((a, b) => b - a);

  const visited = [];
  const visitedWeak = [];
  for (let i = 0; i < dist.length; i++) {
    let maxVisit = [];
    for (let j = 0; j < weak.length; j++) {
      const start = weak[j];
      const nextPos = weak[j] + dist[i];
      const visitedPos = weak.filter(
        (val) =>
          val <= nextPos && val >= start && visited.indexOf(val % n) === -1
      );
      if (maxVisit.length === 0 || maxVisit.length <= visitedPos.length)
        maxVisit = visitedPos.slice();
    }
    const newWeak = [];
    for (let j = 0; j < weak.length; j++) {
      if (maxVisit.indexOf(weak[j] % n) === -1) {
        newWeak.push(weak[j]);
      }
    }
    weak = newWeak.slice();
    visited.push(...maxVisit.map((val) => val % n));
    if (new Set(visited).size === len) return i + 1;
  }

  return -1;
}
*/

// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%99%B8%EB%B2%BD%EC%A0%90%EA%B2%80-JS 참고
function solution(n, weak, dist) {
  const len = weak.length;

  // 원형 구조를 위해 각 자리에 n만큼 더한 값을 추가
  weak.forEach((val) => {
    weak.push(val + n);
  });
  weak.pop();

  dist.sort((a, b) => b - a);
  for (let n = 1; n <= dist.length; n++) {
    const permutations = getPermutation(dist, n);

    for (const perm of permutations) {
      for (let i = 0; i < len; i++) {
        let line = weak.slice(i, i + len);
        for (const val of perm) {
          const end = line[0] + val;
          line = line.filter((pos) => pos > end);
          if (line.length === 0) return n;
        }
      }
    }
  }

  return -1;
}

function getPermutation(arr, n) {
  if (n === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.filter((_, idx) => idx !== index);

    const perms = getPermutation(rest, n - 1);
    const attach = perms.map((perm) => [fixed, ...perm]);
    result.push(...attach);
  });

  return result;
}
