import heapq

def solution(operations):
    answer = [0,0]
    opers = list(map(lambda x: x.split(' '), operations))
    lst = []
    
    for oper in opers:
        if oper[0] == 'I':
            lst.append(int(oper[1]))
        elif oper[0] == 'D':
            if len(lst) != 0:
                if oper[1] == '1':
                    tmp_lst = [num * -1 for num in lst]
                    heapq.heapify(tmp_lst)
                    heapq.heappop(tmp_lst)
                    lst = [num * -1 for num in tmp_lst]
                elif oper[1] == '-1':
                    tmp_lst = lst[:]
                    heapq.heapify(tmp_lst)
                    heapq.heappop(tmp_lst)
                    lst = tmp_lst[:]
    if len(lst) != 0:
        answer = [max(lst), min(lst)]
    
    return answer