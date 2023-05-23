import heapq


# https://school.programmers.co.kr/questions/19392 풀이 참고
# 회전할 대 바뀌는 값을 잘 고려해서 회전하자...
def solution(rows, columns, queries):
    answer = []
    matrix = []
    for i in range(rows):
        arr = []
        for j in range(1, columns + 1):
            arr.append(i * columns + j)
        matrix.append(arr)

    for query in queries:
        heap = []
        heapq.heapify(heap)
        x1, y1, x2, y2 = list(map(lambda x: x - 1, query))

        tmp = matrix[x1][y2]
        for y in range(y2, y1, -1):
            matrix[x1][y] = matrix[x1][y - 1]
            heapq.heappush(heap, matrix[x1][y])

        for x in range(x1, x2):
            matrix[x][y1] = matrix[x + 1][y1]
            heapq.heappush(heap, matrix[x][y1])

        for y in range(y1, y2):
            matrix[x2][y] = matrix[x2][y + 1]
            heapq.heappush(heap, matrix[x2][y])

        for x in range(x2, x1, -1):
            matrix[x][y2] = matrix[x - 1][y2]
            heapq.heappush(heap, matrix[x][y2])

        matrix[x1 + 1][y2] = tmp
        heapq.heappush(heap, tmp)

        answer.append(heapq.heappop(heap))

    return answer
