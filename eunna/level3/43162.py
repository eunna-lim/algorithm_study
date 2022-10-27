def solution(n, computers):
    answer = 0
    linked_computers = []
    for i in range(n):
        linked_computer = []
        for j in range(n):
            if i != j and computers[i][j] == 1:
                linked_computer.append(j)
        linked_computers.append(linked_computer)
    
    networks = []
    visited = [False] * n
    
    # 모든 컴퓨터의 방문 여부를 확인하기 위함
    for i in range(n):
        
        # 방문한 컴퓨터인지 확인
        if visited[i]:
            continue

        stack = [i]
        network = []

        while stack:
            computer = stack.pop()
            if computer not in network:
                network.append(computer)
                stack += linked_computers[computer]
                visited[computer] = True

        networks.append(network)
                    
    answer = len(networks)
    
    return answer