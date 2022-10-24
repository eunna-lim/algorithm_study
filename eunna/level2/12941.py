def solution(A,B):
    answer = 0
    
    sorted_A = sorted(A)
    sorted_B = sorted(B)
    length = len(A)
    
    for i in range(length):
        answer += (sorted_A[i] * sorted_B[length - 1 - i])
        
    return answer