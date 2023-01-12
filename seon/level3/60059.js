function rotate(key) {
  const { length } = key;
  const rotated = Array.from(Array(length), () => Array(length));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      rotated[j][length - i - 1] = key[i][j];
    }
  }
  return rotated;
}

function check(lock, borderLength) {
  for (let i = borderLength; i < lock.length - borderLength; i++) {
    for (let j = borderLength; j < lock.length - borderLength; j++) {
      if (lock[i][j] !== 1) return false;
    }
  }
  return true;
}

function solution(key, lock) {
  const borderLength = key.length - 1;
  const newLockLength = 2 * borderLength + lock.length;
  const newLock = Array.from({ length: newLockLength }, () =>
    Array(newLockLength).fill(0)
  );

  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      newLock[i + borderLength][j + borderLength] = lock[i][j];
    }
  }

  for (let count = 0; count < 4; count++) {
    key = rotate(key);

    for (let i = 0; i < newLock.length - borderLength; i++) {
      for (let j = 0; j < newLock.length - borderLength; j++) {
        for (let x = 0; x < key.length; x++) {
          for (let y = 0; y < key.length; y++) {
            newLock[x + i][y + j] += key[x][y];
          }
        }

        if (check(newLock, borderLength)) return true;

        for (let x = 0; x < key.length; x++) {
          for (let y = 0; y < key.length; y++) {
            newLock[x + i][y + j] -= key[x][y];
          }
        }
      }
    }
  }
  return false;
}
