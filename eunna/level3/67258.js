/*
// 정확성 11번, 14번에서 시간 초과 발생
// 투 포인터와 슬라이딩 윈도우 공부 후 다시 풀이
function solution(gems) {
    var answer = [];
    const setGems = [...new Set(gems)];
    if (setGems.length === 1) return [1, 1];
    let width = setGems.length;
    
    while (true) {
        let arr = gems.slice(0, width);
        for (let i = 0; i <= gems.length - width; i++) {
            const setChunk = [...new Set(arr)];
            if (setChunk.length === setGems.length) {
                answer = [i + 1, i + width];
                return answer
            }
            if (i + width === gems.length) break;
            
            arr = [...arr.slice(1), gems[i + width]];
        }

        if (width > gems.length) {
            break;
        }
        width++;
    }
    answer = [1, gems.length]
    return answer;
}
*/

/*
// 2차 시도로 정확도는 모두 통과했으나, 효율성은 시간초과..
function solution(gems) {
    var answer = [1, gems.length];
    const setGems = new Set(gems);
    if (setGems.length === 1) return [1, 1];
    let length = Infinity;
    let [start, end] = [0, 0];
    
    while (start <= end) {
        const arr = gems.slice(start, end + 1);
        const setArr = new Set(arr);
        if (setArr.size === setGems.size) {
            if (length > end - start + 1) {
                length = end - start + 1;
                answer = [start + 1, end + 1];
            }
            start++;
        } else {
            end++;
            if (end >= gems.length) break;
        }
    }
    
    return answer;
}

function solution(gems) {
    var answer = [1, gems.length];
    const setGems = new Set(gems);
    if (setGems.length === 1) return [1, 1];
    let [start, end] = [0, 0];
    let arr = gems.slice(start, end + 1);
    
    while (start <= end && end < gems.length) {
        if (new Set(arr).size === setGems.size) {
            if ((answer[1] - answer[0]) > (end - start)) {
                answer = [start + 1, end + 1];
            }
            start++;
            arr = arr.slice(1);
        } else {
            end++;
            if (end < gems.length) arr.push(gems[end]);
        }
    }
    
    return answer;
}
*/

/*
// 객체를 사용해 인덱스를 저장하는 방식으로 풀이했으나 효율성에서 시간 초과...
function solution(gems) {
    var answer = [1, gems.length];
    const setGems = [...new Set(gems)];
    if (setGems.length === 1) return [1, 1];
    let indexes = {};
    
    gems.forEach((gem, index) => {
        indexes[gem] = index + 1;
        
        if (Object.keys(indexes).length === setGems.length) {
            const values = Object.values(indexes);
            const [min, max] = [Math.min(...values), index + 1];
            if ((answer[1] - answer[0]) > (max - min)) {
                answer = [min, max];
            }
        }
    })
    
    return answer;
}
*/

// https://gwang920.github.io/algorithm/progreammers-2-67258/
// 위 블로그의 풀이 참고
// 자바스크립트의 자료구조 Map을 공부해야할 것
function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;
  const gemMap = new Map();
  const gemLengths = [];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemVarietyCounts) {
      gemLengths.push([gemMap.values().next().value + 1, i + 1]);
    }
  });

  gemLengths.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });

  return gemLengths[0];
}
