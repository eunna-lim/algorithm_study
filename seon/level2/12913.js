function solution(land) {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < 4; col++) {
      const temp = land[row - 1][col];
      land[row - 1][col] = -1;
      land[row][col] += Math.max(...land[row - 1]);
      land[row - 1][col] = temp;
    }
  }

  return Math.max(...land[land.length - 1]);
}
