/*
// 정확성 : 10 / 16 (62.5 / 100.0)
function solution(arr) {
  var answer = [0, 0];
  const compression = new Set(arr.flat());
  if (compression.size === 1) return compression.has(0) ? [1, 0] : [0, 1];

  let width = parseInt(arr.length / 2);

  while (true) {
    let isCompressed = false;
    for (let i = 0; i < arr.length / width; i++) {
      for (let j = 0; j < arr.length / width; j++) {
        const part = arr
          .slice(width * i, width * (i + 1))
          .reduce(
            (acc, row) => [...acc, ...row.slice(width * j, width * (j + 1))],
            []
          );
        const compression = new Set(part);
        if (compression.has(-1)) continue;

        if (compression.size === 1) {
          isCompressed = true;
          for (let k = width * i; k < width * (i + 1); k++) {
            for (let l = width * j; l < width * (j + 1); l++) {
              arr[k][l] = -1;
            }
          }

          compression.has(0) ? answer[0]++ : answer[1]++;
        }
      }
    }

    width /= 2;
    if (!isCompressed) break;
  }

  return answer;
}
*/

// https://school.programmers.co.kr/questions/18650 풀이 참고...
// 재귀함수를 잘 쓰자..
function solution(arr) {
  if (arr.every((row) => row.every((cell) => cell === 0))) return [1, 0];
  if (arr.every((row) => row.every((cell) => cell === 1))) return [0, 1];
  const len = arr.length,
    q1 = arr.splice(0, len / 2),
    q2 = q1.map((row) => row.splice(len / 2, len / 2)),
    q3 = arr,
    q4 = q3.map((row) => row.splice(len / 2, len / 2));
  return [q1, q2, q3, q4].reduce(
    (ans, x) => solution(x).map((d, i) => d + ans[i]),
    [0, 0]
  );
}

// 시도했던 방법에서 위의 4분할 풀이를 추가해서 성공
// 하지만 시간이 오래걸려서 효율성 측면에서는 위의 방법이 더 나음
function solution2(arr) {
  const compressed = new Set(arr.flat());
  if (compressed.size === 1) return compressed.has(0) ? [1, 0] : [0, 1];

  var answer = [0, 0];

  function compress(part) {
    if (part.length === 1) {
      part[0].indexOf(0) > -1 ? answer[0]++ : answer[1]++;
      return;
    }

    const compressed = new Set(part.flat());

    if (compressed.size === 1) {
      compressed.has(0) ? answer[0]++ : answer[1]++;
    } else {
      const len = part.length;
      const p1 = part.splice(0, len / 2),
        p2 = p1.map((row) => row.splice(len / 2, len / 2)),
        p3 = part,
        p4 = p3.map((row) => row.splice(len / 2, len / 2));
      [p1, p2, p3, p4].forEach(compress);
    }
  }

  compress(arr);
  return answer;
}
