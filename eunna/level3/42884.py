def check_courses(route, courses):
    new_courses = courses[:]
    for i in range(len(new_courses)):

        # 이미 겹치는 구간이 존재하는 경우
        if route[0] <= new_courses[i][0] and route[1] >= new_courses[i][1]:
            return new_courses

        is_changed = False
        # 겹치는 구간이 존재하는 경우, courses에 겹치는 구간 포함
        if route[0] >= new_courses[i][0] and route[0] <= new_courses[i][1]:
            new_courses[i][0] = route[0]
            is_changed = True
        if route[1] <= new_courses[i][1] and route[1] >= new_courses[i][0]:
            new_courses[i][1] = route[1]
            is_changed = True

        if is_changed:
            return new_courses

    # 겹치는 구간이 없는 경우, courses에 해당 경로 추가
    new_courses.append(route)
    return new_courses


def solution(routes):
    answer = 0
    # 최소 카메라 개수 => 겹치는 구간의 개수
    sorted_routes = sorted(routes, key=lambda x: x[0])
    courses = []
    for route in sorted_routes:
        courses = check_courses(route, courses)
    answer = len(courses)
    return answer
