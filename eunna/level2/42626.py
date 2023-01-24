"""
import heapq

# 정확성 : 17 / 21 (65.4)
# 효율성 : 5 / 5 (19.2)
# 합계 : 84.6 / 100.0
# 정확성 테스트케이스 1, 3, 8, 14 실패
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    tmp = 0
    cnt = 0
    while scoville:
        minSco = heapq.heappop(scoville)

        if minSco < K or tmp != 0:
            cnt += 1

            if cnt == 2:
                tmp += minSco * 2
                heapq.heappush(scoville, tmp)
                tmp = 0
                cnt = 0
                answer += 1
            else:
                tmp += minSco
        else:
            heapq.heappush(scoville, minSco)
            break

    return answer
"""

# 제한사항을 제대로 읽지 않음... (불가능할 때 -1을 return 한다는 조건을 추가)
import heapq


def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    while len(scoville) >= 2:
        minSco = heapq.heappop(scoville)
        minSco2 = heapq.heappop(scoville)

        if minSco < K:
            mixed = minSco + (minSco2 * 2)

            heapq.heappush(scoville, mixed)
            answer += 1
        else:
            heapq.heappush(scoville, minSco)
            heapq.heappush(scoville, minSco2)
            break

    if len(scoville) > 0 and heapq.heappop(scoville) < K:
        return -1

    return answer
