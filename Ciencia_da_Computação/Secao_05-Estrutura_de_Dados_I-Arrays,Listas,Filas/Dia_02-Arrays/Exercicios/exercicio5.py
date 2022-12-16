def count_communication_in_row(
    row_length: int,
    linear_list: list,
    servers_that_communicate: set
):
    array_length = len(linear_list)
    delimiter = 0

    for index in range(array_length - 1):
        cond1 = delimiter < row_length - 1
        cond2 = linear_list[index] == linear_list[index + 1] == 1
        if cond1 and cond2:
            servers_that_communicate.update([index, index + 1])
        if cond1:
            delimiter += 1
        else:
            delimiter = 0


def count_communication_in_column(
    row_length: int,
    linear_list: list,
    servers_that_communicate: set
):
    array_length = len(linear_list)
    counter = 0
    delimiter = row_length

    for index in range(array_length - row_length):
        if linear_list[index] == linear_list[delimiter] == 1:
            servers_that_communicate.update([index, delimiter])

        delimiter += 1

    return counter


def number_of_servers_communicating(servers: list):
    row_length = len(servers[0])
    servers_that_communicate = set()

    linear_list = []
    for row_server in servers:
        linear_list.extend(row_server)

    count_communication_in_row(
        row_length, linear_list, servers_that_communicate)
    count_communication_in_column(
        row_length, linear_list, servers_that_communicate)

    return len(list(servers_that_communicate))
