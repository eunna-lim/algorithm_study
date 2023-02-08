def solution(prices):
    answer = []

    for i in range(len(prices) - 1):
        nxt = i + 1
        while nxt < len(prices) - 1:
            if prices[nxt] < prices[i]:
                break
            else:
                nxt += 1
        answer.append(nxt - i)
    answer.append(0)
    return answer
