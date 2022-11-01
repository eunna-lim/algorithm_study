def solution(n):
    answer = 1
    
    for i in range(1, n//2 + 1):
        num = i
        total = 0
        while total < n:
            total += num
            num += 1
        if total == n:
            answer += 1
        
    return answer