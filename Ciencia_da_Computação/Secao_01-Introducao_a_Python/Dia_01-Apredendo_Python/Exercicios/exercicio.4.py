def nome_de_maior_comprimento(name_list):
    maior_nome = ""
    for nome in name_list:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome
