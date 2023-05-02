def solution(gems):
    answer = []
    allGems = set(gems)
    size = len(allGems)

    while size <= len(gems):
        for i in range(0, len(gems) - size + 1):
            sliceGems = gems[i:i + size]
            if set(sliceGems) == allGems:
                return [i + 1, i + size]
        size += 1

    return answer
