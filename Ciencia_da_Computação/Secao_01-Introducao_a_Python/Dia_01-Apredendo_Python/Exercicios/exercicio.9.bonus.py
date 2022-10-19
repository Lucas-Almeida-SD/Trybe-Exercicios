def soma_elementos_anteriores(n):
    counter = 0
    for index in range(1, n + 1):
        counter += index
    return counter
