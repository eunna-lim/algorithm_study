# 효율성 측면에서 좋지 않음. while 안에 for문을 넣을 필요가 없을 것으로 생각됨.
# 따라서 불필요한 확인을 하는 코드를 제거(for문)
'''
import heapq

def solution(A, B):
    answer = 0

    A.sort()
    heapq.heapify(B)

    while B:
        checkWin = False
        b = heapq.heappop(B)
        for i in range(len(A)):
            a = A[i]
            if b > a:
                A.pop(i)
                checkWin = True
                break
        if checkWin:
            answer += 1
        else:
            A.pop()

    return answer
'''


def solution(A, B):
    answer = 0

    A.sort()
    B.sort()

    for b in B:
        a = A[0]
        if b > a:
            A.pop(0)
            answer += 1
        else:
            A.pop()

    return answer
