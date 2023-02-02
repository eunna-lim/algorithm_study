function solution(n, k, cmd) {
  const prevRow = {};
  const nextRow = {};
  for (let i = 0; i < n; i++) {
    prevRow[i] = i - 1;
    nextRow[i] = i + 1;
  }
  prevRow[0] = null;
  nextRow[n - 1] = null;

  const deleted = [];
  let curRow = k;

  function rowDown(row, count) {
    while (count--) row = nextRow[row];
    return row;
  }

  function rowUp(row, count) {
    while (count--) row = prevRow[row];
    return row;
  }

  cmd.forEach((item) => {
    const [action, number] = item.split(" ");

    if (action === "D") curRow = rowDown(curRow, Number(number));
    else if (action === "U") curRow = rowUp(curRow, Number(number));
    else if (action === "C") {
      const newRow = rowDown(curRow, 1) ?? rowUp(curRow, 1);

      nextRow[prevRow[curRow]] = nextRow[curRow];
      prevRow[nextRow[curRow]] = prevRow[curRow];
      deleted.push(curRow);
      curRow = newRow;
    } else if (action === "Z") {
      const restoredRow = deleted.pop();
      nextRow[prevRow[restoredRow]] = restoredRow;
      prevRow[nextRow[restoredRow]] = restoredRow;
    }
  });

  const answer = Array(n).fill("O");
  deleted.forEach((row) => (answer[row] = "X"));
  return answer.join("");
}
