def it_is_fizzbuzz(n):
    return n % 5 == 0 and n % 3 == 0


def it_is_fizz(n):
    return n % 3 == 0


def it_is_buzz(n):
    return n % 5 == 0


def return_numeric_list(n):
    numeric_list = list()

    for index in range(1, n + 1):
        if it_is_fizzbuzz(index):
            numeric_list.append('FizzBuzz')
        elif it_is_fizz(index):
            numeric_list.append('Fizz')
        elif it_is_buzz(index):
            numeric_list.append('Buzz')
        else:
            numeric_list.append(index)

    return numeric_list


# print(return_numeric_list(15))
