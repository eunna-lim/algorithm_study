const alphabet = ["A", "E", "I", "O", "U"];

function getNextWord(curWord) {
  if (curWord.length !== 5) return curWord + alphabet[0];

  while (curWord[curWord.length - 1] === alphabet[4]) {
    curWord = curWord.substring(0, curWord.length - 1);
  }

  const nextAlphabetIndex = alphabet.findIndex((str) => str === curWord[curWord.length - 1]) + 1;

  return curWord.substring(0, curWord.length - 1) + alphabet[nextAlphabetIndex];
}

function solution(word) {
  let answer = 1;
  let curWord = alphabet[0];

  while (true) {
    if (curWord === word) return answer;

    curWord = getNextWord(curWord);
    answer++;
  }
}
