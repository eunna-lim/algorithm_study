/*
// 정확성 : 4 / 14 (28.6 / 100.0)
// 테스트케이스 2, 3, 7, 14만 성공
function solution(bridge_length, weight, truck_weights) {
  const len = truck_weights.length;
  const truckSec = new Array(bridge_length).fill(0);

  const bridge = [];
  const done = [];
  let bridgeWeight = 0;
  let sec = 0;

  while (done.length < len) {
    if (truck_weights.length) {
      const truck = truck_weights[0];
      if (truck + bridgeWeight <= weight) {
        truck_weights.shift();
        bridge.push(truck);
        bridgeWeight += truck;
      }
    }

    for (let i = 0; i < bridge.length; i++) {
      truckSec[i]++;
    }

    if (truckSec[0] > bridge_length && bridge.length) {
      const doneTruck = bridge.shift();
      bridgeWeight -= doneTruck;
      done.push(doneTruck);
      truckSec.shift();
      truckSec.push(0);

      if (bridge.length === 0 && truck_weights.length) {
        const nextTruck = truck_weights.shift();
        bridge.push(nextTruck);
        bridgeWeight += nextTruck;
        truckSec[0] = 1;
      }
    }

    sec++;
  }

  return sec;
}
*/

/*
// 정확성 : 8 / 14 (57.1 / 100.0)
// 테스트케이스 4, 5, 6 틀림, 6, 9, 13은 시간 초과
function solution(bridge_length, weight, truck_weights) {
  const len = truck_weights.length;

  const bridge = new Array(bridge_length).fill(0);
  const done = [];
  let bridgeWeight = 0;
  let sec = 0;

  while (done.length < len) {
    if (truck_weights.length) {
      const truck = truck_weights[0];
      if (truck + bridgeWeight <= weight) {
        truck_weights.shift();
        bridge.push(truck);
        bridgeWeight += truck;
      } else {
        bridge.push(0);
      }
    }

    if (bridge[0] !== 0) {
      const doneTruck = bridge[0];
      done.push(doneTruck);
      bridgeWeight -= doneTruck;

      if (truck_weights.length && bridgeWeight + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        bridgeWeight += nextTruck;
        bridge[bridge.length - 1] = nextTruck;
      }
    }

    bridge.shift();
    sec++;
  }

  return sec;
}
*/

// https://school.programmers.co.kr/questions/41234 풀이 참고
// 다리에 트럭이 올라갈 수 있는 경우에는 올리고 시간을 늘림
// 다리에 트럭이 올라갈 수 없는 경우에는 가장 앞에 있는 트럭이 나가야 함 -> 현재 시간과 비교하여 나가는 시간이 더 오래걸릴 경우에는 나가는 시간으로 바꿔줌
function solution(bridge_length, weight, truck_weights) {
  let sec = 0;
  let bridgeWeight = 0;
  const bridge = [];

  while (truck_weights.length || bridge.length) {
    if (
      bridgeWeight + truck_weights[0] <= weight &&
      bridge.length <= bridge_length
    ) {
      const truck = truck_weights.shift();
      bridgeWeight += truck;

      // 트럭 무게, 나가는 시간
      bridge.push([truck, sec + bridge_length]);
      sec++;
    } else {
      const [truck, outSec] = bridge.shift();
      if (sec < outSec) sec = outSec;
      bridgeWeight -= truck;
    }
  }

  return sec + 1;
}
