def solution(n, words):
    answer = [0, 0]

    for i in range(len(words) - 1):
        for j in range(i - 1, -1, -1):
            if words[i] == words[j]:
                answer = [i % n + 1, i // n + 1]
                return answer
        if words[i][-1] != words[i + 1][0]:
            answer = [(i + 1) % n + 1, (i + 1) // n + 1]
            return answer

    for j in range(len(words) - 2, -1, -1):
        if words[len(words) - 1] == words[j]:
            answer = [(len(words) - 1) % n + 1, (len(words) - 1) // n + 1]
            return answer

    return answer
