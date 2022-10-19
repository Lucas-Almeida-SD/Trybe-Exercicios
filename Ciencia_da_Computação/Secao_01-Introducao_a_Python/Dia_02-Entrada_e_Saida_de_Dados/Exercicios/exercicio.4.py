import json
import csv


def calcula_porcentagem(dictionary, dictionary_key):
    counter_books = 0
    for qtde_livros in dictionary.values():
        counter_books += qtde_livros
    return dictionary[dictionary_key] / counter_books


with open("books.json", mode="r") as file:
    content = json.load(file)
    categories = []

qtde_livros_por_categoria = dict()
for element in content:
    for category in element['categories']:
        if category in qtde_livros_por_categoria:
            qtde_livros_por_categoria[category] += 1
        else:
            qtde_livros_por_categoria[category] = 1


lista_de_qtde_livros_por_categoria = dict()
for key in qtde_livros_por_categoria:
    porcetagem = calcula_porcentagem(qtde_livros_por_categoria, key)
    lista_de_qtde_livros_por_categoria[key] = porcetagem

with open('books_percentage_by_category.csv', mode='w') as file:
    writer = csv.writer(file)

    header = ['categoria', 'porcentagem']
    writer.writerow(header)

    for element in lista_de_qtde_livros_por_categoria.items():
        writer.writerow(element)
