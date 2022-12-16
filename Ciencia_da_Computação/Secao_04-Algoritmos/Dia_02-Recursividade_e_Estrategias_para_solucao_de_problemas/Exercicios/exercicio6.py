def reverse_list(my_list: list):
    if len(my_list) == 1:
        return [my_list[0]]
    else:
        return [my_list[-1]] + reverse_list(my_list[0:-1])
