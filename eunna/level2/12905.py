def solution(board):
    answer = 0
    dp = [[0] * (len(board[0]) + 1) for _ in range(len(board) + 1)]
    max_edge = 0

    for i in range(1, len(board) + 1):
        for j in range(1, len(board[0]) + 1):
            if board[i - 1][j - 1] == 1:
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                max_edge = max(max_edge, dp[i][j])
    answer = max_edge**2
    return answer


def solution2(board):
    answer = 0
    edges = [[num for num in row] for row in board]
    max_edge = max(edges[0])

    for i in range(1, len(board)):
        for j in range(1, len(board[0])):
            if board[i][j] == 1:
                edges[i][j] = (
                    min(edges[i - 1][j], edges[i][j - 1], edges[i - 1][j - 1]) + 1
                )
                max_edge = max(edges[i][j], max_edge)

    answer = max_edge**2
    return answer
