function solution(people, limit) {
  let answer = 0;
  // sort 할 때 오름차순 정렬을 하기 위해서는 sort안에 함수를 넣어줘야 한다.
  // js는 기본적으로 유니코드 순서로 정렬하기 때문에 1, 2, 10 ,4 => 1, 10, 2, 4로 정렬함.
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (left === right) {
      answer += 1;
      break;
    }

    if (people[left] + people[right] <= limit) {
      left += 1;
      right -= 1;
    } else {
      right -= 1;
    }
    answer += 1;
  }

  return answer;
}
