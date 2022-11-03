def check_connection(str1, str2):
    count = 0
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            count += 1
    if count == 1:
        return True
    
    return False


def solution(begin, target, words):
    answer = 0
    if target not in words:
        return 0
    
    connections = {begin: []}
    for i in range(len(words)):
        if check_connection(begin, words[i]):
            connections[begin].append(words[i])
    
    for i in range(len(words)):
        for j in range(len(words)):
            if i != j and check_connection(words[i], words[j]):
                if words[i] in connections:
                    connections[words[i]].append(words[j])
                else:
                    connections[words[i]] = [words[j]]
    
    route = []
    stack = [begin]
    while stack:
        word = stack.pop()
        if word == target:
            route.append(word)
            break
            
        if word not in route:
            stack.extend(connections[word])
            route.append(word)
    
    answer = len(route[1:])
    
    return answer