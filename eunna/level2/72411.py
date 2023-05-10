"""
# 정확성 : 17 / 20
# 테스트케이스 13 ~ 15번 틀림(시간초과)

import itertools


def isInOrder(order, lst):
    cnt = 0
    for food in lst:
        if food in order:
            cnt += 1
    return cnt == len(lst)


def solution(orders, course):
    answer = []
    menus = []
    for order in orders:
        lst = list(order)
        for food in lst:
            if food not in menus:
                menus.append(food)

    for num in course:
        combinations = itertools.combinations(menus, num)
        cntCombiDict = {}
        for combi in combinations:
            cntMatches = 0
            for order in orders:
                if isInOrder(order, combi):
                    cntMatches += 1

            if cntMatches >= 2:
                if cntMatches in cntCombiDict:
                    cntCombiDict[cntMatches].append(''.join(sorted(combi)))
                else:
                    cntCombiDict[cntMatches] = [''.join(sorted(combi))]

        if len(cntCombiDict.keys()):
            answer.extend(cntCombiDict[max(cntCombiDict.keys())])
    answer.sort()
    return answer
"""
import itertools


def isInOrder(order, lst):
    cnt = 0
    for food in lst:
        if food in order:
            cnt += 1
    return cnt == len(lst)


def solution(orders, course):
    answer = []

    for num in course:
        combinations = list(itertools.chain(
            *map(lambda x: list(itertools.combinations(x, num)), orders)))
        cntCombiDict = {}
        for combi in combinations:
            cntMatches = 0
            for order in orders:
                if isInOrder(order, combi):
                    cntMatches += 1

            if cntMatches >= 2:
                if cntMatches in cntCombiDict:
                    cntCombiDict[cntMatches].append(''.join(sorted(combi)))
                else:
                    cntCombiDict[cntMatches] = [''.join(sorted(combi))]

        if len(cntCombiDict.keys()):
            answer.extend(cntCombiDict[max(cntCombiDict.keys())])
    answer = list(set(answer))
    answer.sort()
    return answer


def solution2(orders, course):
    answer = []

    for num in course:
        combinations = []
        for order in orders:
            combinations.extend(map(lambda x: ''.join(
                sorted(x)), itertools.combinations(order, num)))

        cntCombi = {}
        for combi in combinations:
            if combi in cntCombi:
                cntCombi[combi] += 1
            else:
                cntCombi[combi] = 1

        answer.extend([k for k, v in cntCombi.items() if v >=
                      2 and v == max(cntCombi.values())])
    answer = list(set(answer))
    answer.sort()
    return answer
