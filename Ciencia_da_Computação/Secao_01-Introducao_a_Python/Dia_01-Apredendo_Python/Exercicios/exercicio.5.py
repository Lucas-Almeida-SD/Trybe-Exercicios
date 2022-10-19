def qtde_latas_e_preco(metros):
    METROS_QUADRADOS_POR_LITRO = 3
    LITROS_POR_LATA = 18
    PRECO_POR_LATA = 80
    METROS_QUADRADOS_POR_LATA = LITROS_POR_LATA * METROS_QUADRADOS_POR_LITRO
    qtde_latas = metros / METROS_QUADRADOS_POR_LATA
    result = (qtde_latas, qtde_latas * PRECO_POR_LATA)
    return result


print(qtde_latas_e_preco(108))
