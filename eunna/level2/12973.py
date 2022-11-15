def solution(s):
    answer = 0

    # 초반에 알파벳 쌍을 replace하는 방식으로 풀려고 함 -> 시간 초과(모든 경우의 수 살펴야해서 시간이 오래 걸림)
    # 질문하기를 참고하여 stack으로 문제를 풀이함

    stack = [s[0]]
    for i in range(1, len(s)):
        if len(stack) != 0:
            char = stack.pop()
        else:
            char = ''

        if char == '':
            stack += [s[i]]
        elif char != s[i]:
            stack += [char, s[i]]

    if len(stack) == 0:
        answer = 1

    return answer
