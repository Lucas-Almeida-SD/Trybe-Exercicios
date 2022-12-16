def amount_of_combinations(values_list):
    values_dict = {}
    counter_combinations = 0

    for value in values_list:
        if value in values_dict:
            list_length = len(values_dict[value])
            last_value_in_the_list = values_dict[value][-1]
            values_dict[value].append(last_value_in_the_list + list_length)
        else:
            values_dict[value] = [0]

    for key in values_dict:
        counter_combinations += values_dict[key][-1]

    return counter_combinations
