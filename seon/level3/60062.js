function pertuation(arr, r) {
  if (r === 1) return arr.map((e) => [e]);

  const result = [];
  arr.forEach((number, index, origin) => {
    const subArr = origin.filter((_, idx) => index !== idx);
    const subPertuation = pertuation(subArr, r - 1);
    subPertuation.forEach((p) => result.push([number, ...p]));
  });
  return result;
}

function solution(n, weak, dist) {
  const weakLength = weak.length;
  for (let i = 0; i < weakLength; i++) {
    weak.push(weak[i] + n);
  }

  let answer = dist.length + 1;
  for (let start = 0; start < weakLength; start++) {
    for (const freinds of pertuation(dist, dist.length)) {
      let count = 1;
      let distance = weak[start] + freinds[count - 1];
      for (let end = start; end < start + weakLength; end++) {
        if (distance < weak[end]) {
          count += 1;
          if (count >= answer) break;
          distance = weak[end] + freinds[count - 1];
        }
      }
      answer = Math.min(answer, count);
    }
  }
  return answer > dist.length ? -1 : answer;
}
