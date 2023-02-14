function solution(land) {
  var answer = 0;

  let row = land[0].slice();

  for (let i = 1; i < land.length; i++) {
    let tmp = [];
    land[i].forEach((val, idx) => {
      const max = Math.max(...row.filter((_, index) => index !== idx));
      tmp.push(val + max);
    });
    row = tmp.slice();
  }
  answer = Math.max(...row);

  return answer;
}
