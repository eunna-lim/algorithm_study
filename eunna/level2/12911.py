def solution(n):
    answer = 0
    n_cnt_1 = str(bin(n)).count('1')
    number = n + 1
    for i in range(n):
        number_cnt_1 = str(bin(number)).count('1')
        if n_cnt_1 == number_cnt_1:
            break
        number += 1
    answer = number
    return answer
