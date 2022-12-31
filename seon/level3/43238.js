function solution(n, times) {
  let [start, end] = [1, Math.max(...times) * n];
  let ans = end;

  while (start <= end) {
    let people = 0;
    const mid = parseInt((start + end) / 2);

    times.forEach((time) => {
      people += parseInt(mid / time);
    });

    if (people < n) start = mid + 1;
    else {
      end = mid - 1;
      ans = Math.min(ans, mid);
    }
  }

  return ans;
}
