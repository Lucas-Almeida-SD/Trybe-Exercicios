def shuffle_cards(cards_array: list):
    cards_list_length = len(cards_array)
    new_cards_array = []
    last_value = []

    if cards_list_length % 2 != 0:
        last_value.append(cards_array.pop(-1))
        cards_list_length = len(cards_array)

    mid = cards_list_length // 2

    left_cards = cards_array[:mid]
    right_cards = cards_array[mid:]

    for index in range(mid):
        new_cards_array.extend([left_cards[index], right_cards[index]])

    new_cards_array.extend(last_value)

    return new_cards_array
