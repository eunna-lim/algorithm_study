const decimalToBinary = (number) => number.toString(2);
const binaryToDecimal = (number) => parseInt(BigInt(number), 2);

function solution(numbers) {
  const answer = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      answer.push(number + 1);
      return;
    }

    const bit = decimalToBinary(number);
    let index;
    for (let i = bit.length - 2; i > 0; i--) {
      if (bit[i] === "0") {
        index = i;
        break;
      }
    }

    if (!index) {
      const result = "10" + bit.substring(1);
      answer.push(binaryToDecimal(result));
    } else {
      const result = bit.substring(0, index) + "10" + bit.substring(index + 2);
      answer.push(binaryToDecimal(result));
    }
  });

  return answer;
}
