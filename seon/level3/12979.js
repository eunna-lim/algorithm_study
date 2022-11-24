// 정확성 테스트 통과, 효율성 테스트 실패
// function solution(n, s, w) {
//   const stations = new Array(n + 1).fill(0);
//   stations[0] = 1;
//   const range = 2 * w + 1;

//   s.forEach((station) => {
//     for (let i = station - w; i <= station + w; i++) {
//       if (i <= n) stations[i] = 1;
//     }
//   });

//   let ans = 0;
//   for (let i = 1; i < stations.length; i++) {
//     if (stations[i]) continue;
//     ans += 1;
//     i += range - 1;
//   }

//   return ans;
// }

function solution(n, s, w) {
  const stations = [[0, 0]];
  const range = 2 * w + 1;
  let answer = 0;

  s.forEach((station) => {
    stations.push([
      station - w > 1 ? station - w : 1,
      station + w < n ? station + w : n,
    ]);
  });
  stations.push([n + 1, n + 1]);

  const START = 0;
  const END = 1;
  for (let i = 0; i < stations.length - 1; i++) {
    answer += Math.ceil(
      (stations[i + 1][START] - (stations[i][END] + 1)) / range
    );
  }

  return answer;
}
