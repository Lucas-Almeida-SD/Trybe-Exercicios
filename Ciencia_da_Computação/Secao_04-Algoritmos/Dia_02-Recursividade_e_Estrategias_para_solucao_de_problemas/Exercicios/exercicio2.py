def count_even_numbers_recursive(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_numbers_recursive(n - 1)
    else:
        return count_even_numbers_recursive(n - 1)
