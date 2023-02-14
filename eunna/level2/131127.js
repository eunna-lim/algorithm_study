function solution(want, number, discount) {
  var answer = 0;

  let slice = {};
  for (let i = 0; i < 10; i++) {
    slice[discount[i]] ? slice[discount[i]]++ : (slice[discount[i]] = 1);
  }
  if (isSame(want, number, slice)) answer++;

  for (let i = 1; i <= discount.length - 10; i++) {
    slice[discount[i - 1]]--;
    slice[discount[i + 9]]
      ? slice[discount[i + 9]]++
      : (slice[discount[i + 9]] = 1);
    if (isSame(want, number, slice)) answer++;
  }

  return answer;
}

function isSame(want, number, slice) {
  for (let i = 0; i < want.length; i++) {
    if (!slice[want[i]]) return false;
    else if (slice[want[i]] !== number[i]) return false;
  }

  return true;
}
