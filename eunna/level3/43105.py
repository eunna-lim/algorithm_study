def calculate(prev, cur):
    result = [prev[0] + cur[0]]
    for i in range(1, len(cur)-1):
        result.append(max(cur[i] + prev[i-1], cur[i] + prev[i]))
    result.append(cur[-1] + prev[-1])
    return result

def solution(triangle):
    answer = 0
    now = triangle[0]
    for i in range(1, len(triangle)):
        now = calculate(now, triangle[i])
    answer = max(now)
    return answer