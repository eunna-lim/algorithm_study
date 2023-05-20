def time_to_minutes(t):
    hour, minute = t.split(":")
    return int(hour) * 60 + int(minute)


# 정확도 : 21 / 30 (70 / 100)
# 테스트케이스 3, 4, 6, 18, 19, 25, 26, 28번 실패, 8번 런타임 에러
def solution_1st_try(m, musicinfos):
    answer = ""
    possible = []
    for musicinfo in musicinfos:
        start, end, title, music = musicinfo.split(",")
        play_times = time_to_minutes(end) - time_to_minutes(start)
        idx = 0

        res = ""
        for i in range(play_times):
            if idx >= len(music):
                idx = 0

            res += music[idx]
            idx += 1
            if idx < len(music) and music[idx] == "#":
                res += music[idx]
                idx += 1
        idx_m = res.find(m)
        if len(res) > len(m) and idx_m > -1 and res[idx_m + len(m)] != "#":
            possible.append([play_times, title])

    possible.sort(key=lambda x: -x[0])
    answer = possible[0][1] if len(possible) else "(None)"
    return answer


# 정확도 : 27 / 30 (90 / 100)
# 테스트케이스 25, 26, 28번 실패
def solution(m, musicinfos):
    answer = [0, ""]
    for musicinfo in musicinfos:
        start, end, title, music = musicinfo.split(",")
        play_times = time_to_minutes(end) - time_to_minutes(start)
        idx = 0

        res = ""
        for i in range(play_times):
            if idx >= len(music):
                idx = 0

            res += music[idx]
            idx += 1
            if idx < len(music) and music[idx] == "#":
                res += music[idx]
                idx += 1
        idx_m = res.find(m)
        if (
            len(res) >= len(m)
            and idx_m > -1
            and res[-(len(res) - idx_m - len(m))] != "#"
        ):
            if answer[0] < play_times:
                answer = [play_times, title]

    if not answer[0]:
        return "(None)"

    return answer[1]


# 정확도 : 29 / 30 (96.7 / 100.0)
# 테스트케이스 8번 틀림
def solution_3rd_try(m, musicinfos):
    answer = [0, ""]
    for musicinfo in musicinfos:
        start, end, title, music = musicinfo.split(",")
        play_times = time_to_minutes(end) - time_to_minutes(start)
        idx = 0

        res = ""
        for i in range(play_times):
            if idx >= len(music):
                idx = 0

            res += music[idx]
            idx += 1
            if idx < len(music) and music[idx] == "#":
                res += music[idx]
                idx += 1

        if res == m and answer[0] < play_times:
            answer = [play_times, title]
            continue

        for i in range(len(res) - len(m)):
            if (
                res[i : i + len(m)] == m
                and res[i + len(m)] != "#"
                and answer[0] < play_times
            ):
                answer = [play_times, title]

    if not answer[0]:
        return "(None)"

    return answer[1]


HALF_NOTES = {"C#": "c", "D#": "d", "F#": "f", "G#": "g", "A#": "a"}


def convert_half_notes(m):
    res = m
    for n in HALF_NOTES.keys():
        res = res.replace(n, HALF_NOTES[n])
    return res


def solution(m, musicinfos):
    answer = [0, "(None)"]
    m = convert_half_notes(m)

    for musicinfo in musicinfos:
        start, end, title, music = musicinfo.split(",")
        music = convert_half_notes(music)

        play_time = time_to_minutes(end) - time_to_minutes(start)

        repeat, remain = play_time // len(music), play_time % len(music)
        music = music * repeat + music[:remain]

        if music.find(m) > -1 and answer[0] < play_time:
            answer = [play_time, title]
            continue

        if len(music) == len(m):
            for i in range(len(m)):
                if music == m and answer[0] < play_time:
                    answer = [play_time, title]
                    break
                music = music[1:] + music[0]

    return answer[1]
