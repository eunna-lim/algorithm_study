from collections import deque


def make_graph(n, wires):
    graph = [[] for i in range(n + 1)]
    for p1, p2 in wires:
        graph[p1].append(p2)
        graph[p2].append(p1)
    return graph


def solution(n, wires):
    answer = n

    for i in range(0, len(wires)):
        rest_wires = wires[:i] + wires[i + 1 :]
        graph = make_graph(n, rest_wires)

        network1 = []
        for start in range(1, n + 1):
            if network1:
                break

            queue = deque([start])
            visited = [0 for i in range(n + 1)]
            visited[start] = 1
            while queue:
                node = queue.popleft()
                network1.append(node)

                for next_node in graph[node]:
                    if not visited[next_node]:
                        queue.append(next_node)
                        visited[next_node] = 1
            answer = min(answer, abs(len(network1) - (n - len(network1))))

    return answer
