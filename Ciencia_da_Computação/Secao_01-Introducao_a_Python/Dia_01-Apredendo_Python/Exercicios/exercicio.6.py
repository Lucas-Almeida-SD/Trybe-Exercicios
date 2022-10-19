def tipo_de_triangulo(lado_a, lado_b, lado_c):
    condicao_1 = lado_a + lado_b > lado_c
    condicao_2 = lado_a + lado_c > lado_b
    condicao_3 = lado_b + lado_c > lado_a

    if (not (condicao_1 and condicao_2 and condicao_3)):
        return 'não é triangulo'

    if (lado_a == lado_b == lado_c):
        return 'Triângulo Equilátero'
    elif (lado_a == lado_b or lado_a == lado_c or lado_b == lado_c):
        return 'Triângulo Isósceles'
    return 'Triângulo Escaleno'
