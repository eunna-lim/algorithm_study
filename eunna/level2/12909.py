def solution(s):
    answer = False
    not_matches = []
    for i in range(len(s)):
        if s[i] == '(':
            not_matches.append(s[i])
        else:
            if len(not_matches) == 0:
                return False
            not_matches.pop()
    
    if len(not_matches) == 0:
        answer = True

    return answer