function ceil(num) {
  return num !== parseInt(num) ? parseInt(num + 1) : num;
}

function solution(n, a, b) {
  var answer = 1;

  for (let i = 0; i < Math.log2(n); i++) {
    a = ceil(a / 2);
    b = ceil(b / 2);

    if (a === b) break;
    else answer++;
  }

  return answer;
}
