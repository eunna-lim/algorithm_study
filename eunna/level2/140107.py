def distance(x, y):
    return (x**2 + y**2) ** 0.5


# 정확성 : 8 / 16 (50.0 / 100.0)
# 틀린 테스트케이스는 시간 초과
def failed_sol(k, d):
    answer = 0

    nums = [k * i for i in range(d // k + 1)]

    for x in nums:
        for y in nums:
            if distance(x, y) <= d:
                answer += 1
            else:
                break

    return answer


# 원에서 x값에 따른 y의 경계값(원의 방정식에서의 y값)을 구함
# y가 0일 때 포함하여 k의 배수의 개수를 더함
# 이중 for문을 사용하면 효율성이 떨어짐 -> 방정식을 활용하여 x값에 따른 최대 y값을 구하여 한 번만 반복하도록 함
def solution(k, d):
    answer = 0

    # x^2 + y^2 <= d^2 (x >= 0, y >= 0)
    for x in range(0, d + 1, k):
        border_y = (d**2 - x**2) ** 0.5
        answer += border_y // k + 1

    return answer
