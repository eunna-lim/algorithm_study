function solution(record) {
  var answer = [];
  let nickMatch = {};

  function recordToText(action, uid) {
    switch (action) {
      case "Enter":
        return nickMatch[uid] + "님이 들어왔습니다.";
      case "Leave":
        return nickMatch[uid] + "님이 나갔습니다.";
      default:
        return;
    }
  }

  record.forEach((rec) => {
    const [action, uid, nick] = rec.split(" ");
    if (action === "Change" || action === "Enter") {
      nickMatch[uid] = nick;
    }
  });

  record.forEach((rec) => {
    const [action, uid, nick] = rec.split(" ");
    const res = recordToText(action, uid);
    if (res) answer.push(res);
  });

  return answer;
}
