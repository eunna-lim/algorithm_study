function solution(arr1, arr2) {
  var answer = [[]];

  const [row, col] = [arr1.length, arr2[0].length];
  let arr2Convert = [];
  for (let i = 0; i < col; i++) {
    let tmp = [];
    for (let j = 0; j < arr2.length; j++) {
      tmp.push(arr2[j][i]);
    }
    arr2Convert.push(tmp);
  }

  let matrix = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    const a = arr1[i];
    for (let j = 0; j < col; j++) {
      const b = arr2Convert[j];
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum = sum + a[k] * b[k];
      }
      row.push(sum);
    }
    matrix.push(row);
  }

  answer = matrix;
  return answer;
}
