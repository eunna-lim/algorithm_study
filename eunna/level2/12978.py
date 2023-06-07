import heapq


# Dijkstra 알고리즘 활용하여 1번 마을에서부터 각 마을까지의 최단거리를 계산함
def solution(N, road, K):
    answer = 0

    graph = [[] for _ in range(N + 1)]
    for ver1, ver2, dist in road:
        graph[ver1].append([ver2, dist])
        graph[ver2].append([ver1, dist])

    distances = [float("inf")] * (N + 1)
    distances[1] = 0
    hq = [[0, 1]]
    heapq.heapify(hq)

    while hq:
        cur_dist, cur_node = heapq.heappop(hq)

        for next_node, dist in graph[cur_node]:
            next_dist = dist + cur_dist
            if distances[next_node] > next_dist:
                distances[next_node] = next_dist
                heapq.heappush(hq, [next_dist, next_node])

    answer = len([d for d in distances if d <= K])
    return answer
