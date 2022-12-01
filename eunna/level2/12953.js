function gcm(a, b) {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  } else {
    if (b > remainder) return gcm(b, remainder);
    else return gcm(remainder, b);
  }
}

function solution(arr) {
  var answer = 0;
  arr.sort((a, b) => b - a);
  answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    answer = (answer * arr[i]) / gcm(answer, arr[i]);
  }

  return answer;
}
