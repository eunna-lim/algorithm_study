# 투 포인터 방식으로 풀이!
# 풀이 방식 이해할 것
def solution(sequence, k):
    answer = []
    end = 0
    subsum = 0

    for start in range(len(sequence)):
        while subsum < k and end < len(sequence):
            subsum += sequence[end]
            end += 1

        if subsum == k:
            answer.append([start, end - 1])

        subsum -= sequence[start]

    answer.sort(key=lambda x: x[1] - x[0])

    return answer[0]
