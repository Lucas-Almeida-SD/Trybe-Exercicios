name = input("Digite seu nome: ")
nameLength = len(name)
for index in range(nameLength):
    print(name[0:nameLength - index])
