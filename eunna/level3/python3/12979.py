import math


def solution(n, stations, w):
    answer = 0
    bottom = 0

    for station in stations:
        top = station - w - 1
        answer += math.ceil((top - bottom) / (2 * w + 1))
        bottom = station + w

    if bottom < n:
        answer += math.ceil((top - bottom) / (2 * w + 1))

    return answer
