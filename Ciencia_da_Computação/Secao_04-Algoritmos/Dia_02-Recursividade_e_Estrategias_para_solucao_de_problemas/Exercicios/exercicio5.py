def is_prime_number_aux(n, divider):
    if divider == 1:
        return 1
    elif n % divider == 0:
        return 1 + is_prime_number_aux(n, divider - 1)
    else:
        return is_prime_number_aux(n, divider - 1)


def is_prime_number(n):
    divider = n

    result = is_prime_number_aux(n, divider)

    if result > 2:
        return print("Não é primo")

    return print("É primo")
