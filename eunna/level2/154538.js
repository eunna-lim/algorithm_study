// x -> y로 만드는 것보다 y -> x로 만드는 것이 더 빠르다(정수만 비교하면 되기 때문!)
function solution(x, y, n) {
  var answer = 0;

  function calc(num) {
    return [num / 3, num / 2, num - n].filter((val) => parseInt(val) === val);
  }
  if (x === y) return 0;

  let arr = [y];
  let i = 0;
  while (true) {
    const tmp = [];
    let maxNum = 0;

    for (let j = 0; j < arr.length; j++) {
      const res = calc(arr[j]);
      if (res.indexOf(x) > -1) return i + 1;

      tmp.push(...res);
      const maxRes = Math.max(...res);
      maxNum = maxNum > maxRes ? maxNum : maxRes;
    }

    if (maxNum < x) break;

    arr = tmp.slice();
    i++;
  }
  return -1;
}
