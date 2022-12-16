def higher_number(numbers: list):
    if len(numbers) == 1:
        return numbers[0]
    elif numbers[0] > numbers[-1]:
        return higher_number(numbers[:-1])
    else:
        return higher_number(numbers[1:])
