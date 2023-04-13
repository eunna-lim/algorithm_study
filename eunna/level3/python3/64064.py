import re

# 정규식을 잘 기억하자!


def solution(user_id, banned_id):
    answer = 0
    possible = []
    for i in range(0, len(banned_id)):
        banned_id[i] = banned_id[i].replace('*', '.')

    stack = [[user_id, banned_id, []]]
    while stack:
        users, banned, banned_users = stack.pop()
        if not banned:
            possible.append(banned_users)
            continue

        pattern = banned[0]

        for user in users:
            if isMatched(user, pattern) and user not in banned_users:
                rest = [x for x in users if x != user]
                rest_banned_id = banned[1:]
                new_banned_users = banned_users[:]
                new_banned_users.append(user)
                stack.append([rest, rest_banned_id, new_banned_users])

    possible = set(map(lambda arr: ','.join(sorted(arr)), possible))
    answer = len(possible)
    return answer


def isMatched(target, pattern):
    p = re.compile(pattern)
    if p.match(target) and len(target) == len(pattern):
        return True
    else:
        return False
