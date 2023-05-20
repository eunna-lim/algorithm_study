# pseudo code를 잘 작성하자!


def convert(s):
    if len(s) == 0:
        return ""
    else:
        cnt = 0
        u, v = "", ""
        for i in range(len(s)):
            if s[i] == "(":
                cnt += 1
            else:
                cnt -= 1

            if cnt == 0:
                u = s[0 : i + 1]
                v = s[i + 1 :]
                break

        if u[0] == "(":
            res = convert(v)
            return u + res
        else:
            tmp = "("
            res = convert(v)
            tmp += res + ")"
            for i in range(1, len(u) - 1):
                tmp += "(" if u[i] == ")" else ")"
            return tmp


def solution(p):
    answer = ""
    answer = convert(p)
    return answer


# solution 함수 자체를 재귀 함수로 만들어 사용 && map 활용
def solution2(p):
    if len(p) == 0:
        return ""
    cnt = 0
    right = True

    for i in range(len(p)):
        cnt += 1 if p[i] == "(" else -1
        if cnt < 0:
            right = False
        if cnt == 0:
            if right:
                return p[0 : i + 1] + solution(p[i + 1 :])
            return (
                "("
                + solution(p[i + 1 :])
                + ")"
                + "".join(list(map(lambda x: "(" if x == ")" else ")", p[1:i])))
            )
