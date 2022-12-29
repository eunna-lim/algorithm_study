function solution(n, times) {
  var answer = 0;
  let bottom = 0,
    top = Number.MAX_SAFE_INTEGER;

  while (bottom <= top) {
    const mid = parseInt((bottom + top) / 2);

    let people = 0;
    for (let time of times) {
      people += parseInt(mid / time);

      if (people > n) break;
    }

    if (people >= n) top = mid - 1;
    else bottom = mid + 1;
  }

  answer = bottom;

  return answer;
}
