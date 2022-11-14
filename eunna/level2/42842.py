def solution(brown, yellow):
    answer = []
    # brown + yellow = n(all blocks)
    n = brown + yellow

    # x * y = brown + yellow = n
    # 2x + 2(y-2) = brown

    for i in range(n, 0, -1):
        if n % i != 0:
            continue

        x = i
        y = n // i

        if 2 * x + 2 * (y-2) == brown:
            answer = [x, y]
            break

    return answer
