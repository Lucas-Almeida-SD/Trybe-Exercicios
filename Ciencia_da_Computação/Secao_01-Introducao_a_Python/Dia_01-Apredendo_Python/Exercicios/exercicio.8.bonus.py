def imprime_triangulo_com_n_asteriscos(n):
    if type(n) == int:
        for index in range(1, n + 1):
            print('*' * index)
    else:
        print('Valor não permitido')
