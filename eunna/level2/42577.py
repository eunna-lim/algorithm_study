"""
# 효율성 테스트 4만 틀림 (95.8 / 100.0)
def solution(phone_book):
    answer = True
    phone_book.sort(key=lambda x: len(x))
    numbers = []

    for number in phone_book:
        for key in numbers:
            if len(key) >= len(number):
                break
            if number.find(key) == 0:
                return False
        numbers.append(number)
    return answer
"""


def solution(phone_book):
    phone_book.sort()

    for i in range(len(phone_book) - 1):
        if (phone_book[i] == phone_book[i + 1][:len(phone_book[i])]):
            return False

    return True
