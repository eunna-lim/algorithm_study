function find4Blocks(m, n, board) {
  const blocks = new Set();
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const curBlock = board[i][j];
      if (curBlock && curBlock === board[i][j + 1] && curBlock === board[i + 1][j] && curBlock === board[i + 1][j + 1])
        blocks
          .add(`${i}-${j}`)
          .add(`${i}-${j + 1}`)
          .add(`${i + 1}-${j}`)
          .add(`${i + 1}-${j + 1}`);
    }
  }
  return blocks;
}

function deleteBlocks(board, blocks) {
  blocks.forEach((block) => {
    const [row, column] = block.split("-").map(Number);
    board[row][column] = 0;
  });
}

function arrangeBlocks(m, n, board) {
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      for (let k = 1; k < m - i; k++) {
        if (board[i][j] && !board[i + k][j] && (i + k + 1 === m || board[i + k + 1][j])) {
          board[i + k][j] = board[i][j];
          board[i][j] = 0;
          break;
        }
      }
    }
  }
}

function solution(m, n, board) {
  board = board.map((string) => string.split(""));

  let answer = 0;
  while (true) {
    const blocks = find4Blocks(m, n, board);
    if (!blocks.size) break;
    answer += blocks.size;

    deleteBlocks(board, blocks);
    arrangeBlocks(m, n, board);
  }

  return answer;
}
