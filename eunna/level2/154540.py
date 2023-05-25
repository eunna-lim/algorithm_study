from collections import deque


def solution(maps):
    answer = []
    visited = [[False for y in range(len(maps[0]))] for x in range(len(maps))]
    moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    for x in range(len(maps)):
        for y in range(len(maps[0])):
            if maps[x][y] == "X" or visited[x][y]:
                continue

            queue = deque([[x, y]])
            visited[x][y] = True
            food = int(maps[x][y])
            while queue:
                curX, curY = queue.popleft()

                if not isAvailable(curX, curY, len(maps), len(maps[0])):
                    continue

                for mx, my in moves:
                    nX = curX + mx
                    nY = curY + my
                    if (
                        isAvailable(nX, nY, len(maps), len(maps[0]))
                        and not visited[nX][nY]
                        and maps[nX][nY] != "X"
                    ):
                        queue.append([nX, nY])
                        visited[nX][nY] = True
                        food += int(maps[nX][nY])

            answer.append(food)

    if len(answer) == 0:
        return [-1]

    return sorted(answer)


def isAvailable(x, y, lenX, lenY):
    return x < lenX and x >= 0 and y < lenY and y >= 0
