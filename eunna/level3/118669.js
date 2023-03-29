/*
// 정확성 : 12 / 25 (38.7 / 100.0)
// 테스트케이스 21은 (signal: aborted (core dumped))
// 나머지는 시간 초과...
function solution(n, paths, gates, summits) {
  var answer = [0, 10000001];
  const tree = Array.from({ length: n + 1 }, () => []);
  paths.forEach(([i, j, w]) => {
    tree[i].push([j, w]);
    tree[j].push([i, w]);
  });

  gates.forEach((gate) => {
    const queue = [[gate, 0, [gate]]];

    while (queue.length) {
      const [pos, intensity, route] = queue.shift();
      if (summits.indexOf(pos) !== -1) {
        if (
          answer[1] > intensity ||
          (answer[1] === intensity && answer[0] > pos)
        ) {
          answer = [pos, intensity];
        }
        continue;
      }

      for (const [nextPos, nextIntensity] of tree[pos]) {
        if (route.indexOf(nextPos) > -1) continue;
        nextIntensity < intensity
          ? queue.push([nextPos, intensity, [...route, nextPos]])
          : queue.push([nextPos, nextIntensity, [...route, nextPos]]);
      }
    }
  });

  return answer;
}
*/

/*
// https://school.programmers.co.kr/questions/35382 참고
// 정확성 : 24 / 25 (93.3 / 100.0)
// 테스트케이스 25번 시간 초과...
function solution(n, paths, gates, summits) {
  var answer = [0, 10000001];
  summits.sort((a, b) => a - b);
  const graph = Array.from({ length: n + 1 }, () => []);
  const intensities = Array.from({ length: n + 1 }, () => 10000001);
  intensities[0] = 0;

  const mapGates = new Map();
  const mapSummits = new Map();

  paths.forEach(([i, j, w]) => {
    graph[i].push([j, w]);
    graph[j].push([i, w]);
  });

  summits.forEach((summit) => mapSummits.set(summit, true));

  const queue = [];
  gates.forEach((gate) => {
    queue.push([gate, 0]);
    intensities[gate] = 0;
  });

  while (queue.length) {
    const [cur, curIntensity] = queue.shift();
    if (mapSummits.has(cur)) continue;

    for (const [next, nextIntensity] of graph[cur]) {
      const maxIntensity = Math.max(curIntensity, nextIntensity);

      if (maxIntensity < intensities[next]) {
        intensities[next] = maxIntensity;
        queue.push([next, maxIntensity]);
      }
    }
  }

  answer = intensities
    .filter((pos, i) => mapSummits.has(i))
    .map((v, i) => [summits[i], v])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0];

  return answer;
}
*/

// 배열을 queue처럼 사용하는 것보다 queue를 직접 구현하는 것이 더 빠르다...
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear++] = val;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(n, paths, gates, summits) {
  var answer = [0, 10000001];
  summits.sort((a, b) => a - b);
  gates.sort((a, b) => a - b);

  const graph = Array.from({ length: n + 1 }, () => []);
  const intensities = Array.from({ length: n + 1 }, () => 10000001);
  intensities[0] = 0;

  const mapSummits = new Map();

  paths.forEach(([i, j, w]) => {
    graph[i].push([j, w]);
    graph[j].push([i, w]);
  });

  summits.forEach((summit) => mapSummits.set(summit, true));

  const queue = new Queue();
  gates.forEach((gate) => {
    queue.enqueue({ node: gate, intensity: 0 });
    intensities[gate] = 0;
  });

  while (!queue.isEmpty()) {
    const { node: cur, intensity: curIntensity } = queue.dequeue();
    if (mapSummits.has(cur)) continue;

    for (const [next, nextIntensity] of graph[cur]) {
      const maxIntensity = Math.max(curIntensity, nextIntensity);

      if (maxIntensity < intensities[next]) {
        intensities[next] = maxIntensity;
        queue.enqueue({ node: next, intensity: maxIntensity });
      }
    }
  }

  answer = intensities
    .filter((v, i) => mapSummits.has(i))
    .map((v, i) => [summits[i], v])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0];

  return answer;
}
