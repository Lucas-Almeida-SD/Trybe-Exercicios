def get_starting_note(player_1_numbers: set, player_2_numbers: set):
    diff_numbers = list(player_1_numbers.difference(player_2_numbers))
    return max(diff_numbers)


def get_reducer(player_1_numbers: set, player_2_numbers: set):
    diff_numbers = list(player_1_numbers.difference(player_2_numbers))
    return min(diff_numbers)


def blefe(players: dict):
    player_1, player_2 = players.keys()
    player_1_numbers = set(players[player_1])
    player_2_numbers = set(players[player_2])

    player_1_starting_note = get_starting_note(
        player_1_numbers, player_2_numbers)
    player_1_reducer = get_reducer(player_1_numbers, player_2_numbers)
    player_1_points = player_1_starting_note - player_1_reducer

    player_2_starting_note = get_starting_note(
        player_2_numbers, player_1_numbers)
    player_2_reducer = get_reducer(player_2_numbers, player_1_numbers)
    player_2_points = player_2_starting_note - player_2_reducer

    if player_1_points > player_2_points:
        print(f"Vecedor: {player_1}")
    elif player_2_points > player_1_points:
        print(f"Vecedor: {player_2}")
    else:
        print("Empate")


blefe({
    'Clara': [0, 1, 5, 9, 11],
    'Marco': [0, 2, 8, 9, 10]
})
