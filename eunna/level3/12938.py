def solution(n, s):
    answer = []
    
    if s < n:
        return [-1]
    
    num = s
    for i in range(n):
        quotient = s // n
        answer.append(quotient)
        num -= quotient
    
    if num == 0:
        return answer
    
    for i in range(num):
        answer[len(answer) - 1 - i] += 1
    
    return answer