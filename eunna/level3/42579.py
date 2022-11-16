def solution(genres, plays):
    answer = []
    plays_by_genre = {}
    musics_by_genre = {}
    for i in range(len(genres)):
        genre, play = genres[i], plays[i]
        if genre in plays_by_genre:
            plays_by_genre[genre] += play
            musics_by_genre[genre].append([i, play])
        else:
            plays_by_genre[genre] = play
            musics_by_genre[genre] = [[i, play]]

    sorted_list = sorted(plays_by_genre.items(),
                         key=lambda x: x[1], reverse=True)

    for item in sorted_list:
        genre = item[0]
        music_list = sorted(
            musics_by_genre[genre], key=lambda x: x[1], reverse=True)
        musics = [x[0] for x in music_list][:2]
        answer += musics

    return answer
