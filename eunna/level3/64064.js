/*
// 테스트케이스 1, 5, 6, 10만 통과(36.4 / 100)
// https://velog.io/@jeky22/javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%88%EB%9F%89-%EC%82%AC%EC%9A%A9%EC%9E%90
// 위 코드 참고

let lst = [];

const check = (id, bannedId) => {
    
    if (id.length !== bannedId.length) return false;
    
    for (let i = 0; i < id.length; i++) {
        if (bannedId[i] !== '*' && id[i] !== bannedId[i]) return false;
    }
    return true;
}

const checkBannedIds = (id, bannedIds, checkList) => {
    let ids = {...checkList};
    for (let i = 0; i < bannedIds.length; i++) {
        const bannedId = bannedIds[i];
        if (check(id, bannedId)) ids[bannedId]++;
    }
    return ids;
}

const dfs = (nums, num, target, arr = []) => {
  if (num === target) lst.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, target, arr);
      arr.pop();
    }
  }
};

function solution(user_id, banned_id) {
    let answer = 0;
    const len = banned_id.length;
    dfs(user_id, 0, len);
    let countBannedId = {};
    for (let i = 0; i < len; i++) {
        if (!Object.keys(countBannedId).includes(banned_id[i])) countBannedId[banned_id[i]] = 1;
        else countBannedId[banned_id[i]]++;
    }
    
    const bannedId = Object.keys(countBannedId);
    
    let bannedList = [];
    for (let i = 0; i < lst.length; i++) {
        const combination = lst[i];
        let checkList = {};
        for (let j = 0; j < bannedId.length; j++) {
            checkList[bannedId[j]] = 0;
        }
        
        for (let j = 0; j < len; j++) {
            checkList = checkBannedIds(combination[j], bannedId, checkList);
        }
        
        let notMatched = false;
        for (let j = 0; j < bannedId.length; j++) {
            if (checkList[bannedId[j]] < countBannedId[bannedId[j]]) notMatched = true;
        }
        if (!notMatched) bannedList.push(checkList);
    }

    answer = bannedList.length;
    return answer;
}
*/

function solution(user_id, banned_id) {
  answer = 0;

  dfs(user_id.slice(), banned_id.slice(), []);
  answer = Array.from(new Set(arr.map((i) => i.sort().join()))).length;
  return answer;
}
var answer;
var arr = [];

function dfs(remain_users, banned_id, ban) {
  if (banned_id.length == 0) {
    arr.push(ban);
    return 1;
  } else {
    for (var idx = 0; idx < remain_users.length; idx++) {
      if (match(remain_users[idx], banned_id[0])) {
        dfs(
          [...remain_users.slice(0, idx), ...remain_users.slice(idx + 1)],
          banned_id.slice(1),
          [...ban, remain_users[idx]]
        );
      }
    }
    return 0;
  }
}

function match(id, pattern) {
  pattern = pattern.replace(/\*/g, ".");
  const regex = RegExp("^(" + pattern + ")$");
  // console.log(id, pattern,regex.test(id))
  return regex.test(id);
}
