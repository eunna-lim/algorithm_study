function solution(bridge_length, weight, truck_weights) {
  const check = Array(truck_weights.length).fill(0);
  let answer = 1,
    start = 0,
    end = 0,
    curWeight = 0;

  while (check[check.length - 1] < bridge_length) {
    if (end - start < bridge_length && end < truck_weights.length && curWeight + truck_weights[end] <= weight) {
      curWeight += truck_weights[end];
      end += 1;
    }

    for (let i = start; i < end; i++) {
      check[i] += 1;
    }

    answer += 1;

    if (check[start] === bridge_length) {
      curWeight -= truck_weights[start];
      start += 1;
    }
  }

  return answer;
}

console.log(solution(100, 100, [10]));

// def solution(bridge_length, weight, truck_weights):
//     check = [0] * len(truck_weights)
//     answer = 0
//     start, end = 0, 0
//     on_weight = 0

//     while check[-1] < bridge_length:
//         if (end-start < bridge_length) and (end < len(truck_weights)) and (on_weight + truck_weights[end] <= weight):
//             on_weight += truck_weights[end]
//             end += 1

//         for i in range(start, end):
//             check[i] += 1

//         answer += 1

//         if check[start] == bridge_length:
//             on_weight -= truck_weights[start]
//             start += 1

//     return answer + 1
