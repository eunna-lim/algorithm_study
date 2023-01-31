function solution(record) {
  const [ENTER, LEAVE, CHANGE] = ["Enter", "Leave", "Change"];

  const users = {};
  const log = record.map((msg) => {
    const [action, id, nickname] = msg.split(" ");
    if (action !== LEAVE) users[id] = nickname;
    return [action, id];
  });

  const answer = [];
  const actionMsg = { [ENTER]: "들어왔습니다.", [LEAVE]: "나갔습니다." };
  log.forEach(([action, id]) => {
    if (action === CHANGE) return;
    answer.push(`${users[id]}님이 ${actionMsg[action]}`);
  });

  return answer;
}
