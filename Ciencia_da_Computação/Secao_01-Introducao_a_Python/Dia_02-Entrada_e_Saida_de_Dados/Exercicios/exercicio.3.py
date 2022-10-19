import random
from time import sleep

with open('word_list.txt', mode='r') as file:
    word_list = file.read().split('\n')

selected_word = random.choice(word_list)
scrambled_selected_word = "".join(
    random.sample(selected_word, len(selected_word))
)
print(f"A palavra é: {scrambled_selected_word}\n")

attempts = 3
while attempts > 0:
    tracos = '-' * 50
    print(tracos)
    print(f'Você tem {attempts} tentativa(s)')
    typed_word = input("Adivinhe a palavra: ")
    print(tracos)

    sleep(2)
    if typed_word == selected_word:
        break

    print('\nPalavra incorreta.\n')
    attempts -= 1
    sleep(2)

if attempts > 0:
    print(f'Parabéns, você acertou. A palavra era "{selected_word}"')
else:
    print(
        'Poxa, você perdeu. Mais sorte da próxima vez.',
        f'A palavra era "{selected_word}"'
    )
