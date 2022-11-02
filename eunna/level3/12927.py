import heapq

# 처음에는 문제에 주어진 대로, works를 이용하여 max값의 index를 계산한 후 works[max_index] -= 1을 하여 풀이
# 위 방식으로는 시간 초과 발생
# 따라서 heapq(최소힙)의 특징을 이용한 heap을 활용하여 효율성을 증대시킴

def solution(n, works):
    answer = 0
    works_heap = [work * (-1) for work in works]
    heapq.heapify(works_heap)
    for i in range(n):
        target_work = heapq.heappop(works_heap)
        if target_work < 0:
            target_work += 1
        heapq.heappush(works_heap, target_work)
    
    for work in works_heap:
        answer += pow(work, 2)
    
    return answer