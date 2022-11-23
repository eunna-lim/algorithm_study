/*
// 정확성은 모두 통과하지만 효율성에서 실패
// 반복문을 최소화할 수 있는 방법으로 생각해야 함
function solution(n, stations, w) {
    var answer = 0;
    let network = new Array(n);
    network.fill(0);
    
    for (let i = 0; i < stations.length; i++) {
        const pos = stations[i] - 1;
        for (let j = pos - w; j <= pos + w; j++) {
            if (j >= n) break;
            network[j] = 1;
        }
    }
    
    while (network.indexOf(0) !== -1) {
        const index = network.indexOf(0);
        for (let j = index; j <= index + 2 * w; j++) {
            if (j >= n) break;
            network[j] = 1;
        }
        answer++;
    }
    
    return answer;
}
*/

// 두 번째 방법으로 풀 시 효율성 테스트 2번만 실패였는데 성공했다..?
// stations의 길이에 따라 효율성이 확인될 수 있도록 함.
const ceil = (num) => {
  if (num > parseInt(num)) return parseInt(num) + 1;
  else return parseInt(num);
};

function solution(n, stations, w) {
  let answer = 0;
  let bottom = 0;

  for (let i = 0; i < stations.length; i++) {
    const pos = stations[i] - 1;
    answer += ceil((pos - w - bottom) / (w * 2 + 1));
    bottom = pos + w + 1;
  }

  if (bottom <= n) {
    answer += ceil((n - bottom) / (w * 2 + 1));
  }

  return answer;
}
