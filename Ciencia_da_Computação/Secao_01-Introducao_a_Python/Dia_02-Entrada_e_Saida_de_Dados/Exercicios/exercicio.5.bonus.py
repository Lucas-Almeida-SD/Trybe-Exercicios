import json
import random
from time import sleep

separator = '-' * 50


def incorrect_word():
    sleep(1)
    print(separator)
    print('Incorreto. Tente novamente!')
    sleep(1)


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

selected_pokemon = random.choice(pokemons)['name']

remaining_attempts = len(selected_pokemon)
while remaining_attempts > 0:
    print(separator)
    letters_to_be_displayed = selected_pokemon[
        0:len(selected_pokemon) - remaining_attempts
    ]
    traces = " __ " * remaining_attempts
    print(f"Dica: {letters_to_be_displayed + traces}")

    typed_word = input("Quem é esse pokémon?\n")

    if typed_word.lower() == selected_pokemon.lower():
        break

    remaining_attempts -= 1
    if remaining_attempts == 0:
        break

    incorrect_word()

sleep(1)
print(separator)
if remaining_attempts > 0:
    print("Parabéns, você acertou!!!")
else:
    print(
        f'Não foi dessa vez. O pokémon era "{selected_pokemon}".'
        + 'Não desista, na próxima você consegue!'
    )
