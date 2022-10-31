def solution(s):
    answer = []
    # 변환한 횟수
    turns = 0
    # 제거한 0의 개수
    count_zero = 0

    while s != '1':
        count_zero += s.count('0')
        converted_s = s.replace('0', '')
        s = str(bin(len(converted_s))[2:])
        turns += 1
        
    answer = [turns, count_zero]
    
    return answer