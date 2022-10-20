def solution(s):
    answer = ''
    words = s.split(' ')
    changed_words = list(map(str.capitalize, words))
    answer = ' '.join(changed_words)
    return answer