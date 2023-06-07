from itertools import permutations


# 정확성 : 12 / 14, 효율성 : 0 / 5 => 63.2 / 100
def failed_sol(n, k):
    answer = []
    answer = list(list(permutations(range(1, n + 1), n))[k - 1])
    return answer


def solution(n, k):
    answer = []
    arr = list(range(1, n))
    # dp로 factorial 구함 (python은 math의 factorial 사용해도 됨)
    # answer의 i번째 숫자의 인덱스 = (k - 1) // (n - 1)!
    # n이 0이 될 때까지 반복함 or for문을 n - 1부터 1까지 돌아도 됨
    # 해당 인덱스의 숫자를 answer에 넣고 제거
    # k = k % (n - 1)!, n = n - 1로 갱신
    dp = [1]

    for i in range(1, n + 1):
        dp.append(dp[i - 1] * i)

    while n > 0:
        idx = (k - 1) // dp[n - 1]
        num = arr.pop(idx)
        answer.append(num)
        k = k % dp[n - 1]
        n -= 1

    return answer
