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


def solution2(sequence, k):
    answer = []

    prefix = [sequence[0]]
    for i in range(1, len(sequence)):
        prefix.append(prefix[i - 1] + sequence[i])

    start, end = 0, 0
    while start <= end and end < len(sequence):
        # start부터 end까지의 부분합
        subsum = prefix[end] - prefix[start] + sequence[start]

        if subsum == k:
            if not answer:
                answer = [start, end]
            else:
                answer = [start, end] if end - \
                    start < answer[1] - answer[0] else answer

        if subsum > k:
            start += 1
        else:
            end += 1

    return answer
