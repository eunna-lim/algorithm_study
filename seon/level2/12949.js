function solution(arr1, arr2) {
  return arr1.map((row) => {
    const arr = [];
    for (let col = 0; col < arr2[0].length; col++)
      arr.push(row.reduce((prev, cur, row) => prev + cur * arr2[row][col], 0));
    return arr;
  });
}
