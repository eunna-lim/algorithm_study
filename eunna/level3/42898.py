def count_paths(path, pos, puddles):
    x, y = pos[1], pos[0]

    # 시작점을 1로 세팅
    if [x, y] == [0, 0]:
        return 1

    # 해당 위치가 웅덩이인 경우
    if [x, y] in puddles:
        return -1
    # 맨 왼 쪽이면서 위가 웅덩이인 경우
    if x == 0 and [x, y-1] in puddles:
        return -1
    # 맨 위이면서 왼쪽이 웅덩이인 경우
    if y == 0 and [x-1, y] in puddles:
        return -1
    # 위와 왼쪽이 모두 웅덩이인 경우
    if path[y][x-1] == -1 and path[y-1][x] == -1:
        return -1

    num_paths = 0
    if path[y][x-1] != -1:
        num_paths += path[y][x-1]
    if path[y-1][x] != -1:
        num_paths += path[y-1][x]

    return num_paths % 1000000007


def solution(m, n, puddles):
    answer = 0
    path = [[0] * m for i in range(n)]
    for i in range(len(puddles)):
        puddles[i] = [puddles[i][0] - 1, puddles[i][1] - 1]

    for i in range(n):
        for j in range(m):
            path[i][j] = count_paths(path, [i, j], puddles)

    print(path)
    answer = path[-1][-1]

    return answer
