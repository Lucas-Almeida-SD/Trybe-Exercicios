def calculate_maximum_time_without_instability(values_array):
    counter = 0
    max_instability = 0

    for value in values_array:
        if value == 1:
            counter += 1
        if counter > max_instability:
            max_instability = counter
        if value == 0:
            counter = 0

    return max_instability
