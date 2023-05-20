from itertools import permutations


def calc(oper, num1, num2):
    if oper == "+":
        return num1 + num2
    elif oper == "-":
        return num1 - num2
    else:
        return num1 * num2


def solution(expression):
    answer = 0
    nums = list(
        map(
            int,
            expression.replace("+", " ").replace("-", " ").replace("*", " ").split(" "),
        )
    )
    opers = [x for x in expression if not x.isdigit()]

    for perm in permutations(["+", "-", "*"], 3):
        stack = list(perm[:])
        tmp_nums = nums[:]
        tmp_opers = opers[:]
        while stack:
            now_oper = stack.pop()
            if now_oper not in opers:
                continue

            idx = 0
            while tmp_opers and idx < len(tmp_opers):
                if tmp_opers[idx] == now_oper:
                    tmp_nums[idx] = calc(now_oper, tmp_nums[idx], tmp_nums[idx + 1])
                    tmp_nums.pop(idx + 1)
                    tmp_opers.pop(idx)
                else:
                    idx += 1
        answer = abs(tmp_nums[0]) if answer < abs(tmp_nums[0]) else answer

    return answer
