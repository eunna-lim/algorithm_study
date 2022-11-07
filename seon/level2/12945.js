function solution(n) {
  const arr = [0, 1];

  while (arr.length <= n) {
    arr[arr.length] = (arr[arr.length - 1] + arr[arr.length - 2]) % 1234567;
  }

  return arr[arr.length - 1];
}
