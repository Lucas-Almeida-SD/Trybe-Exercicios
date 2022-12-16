from stack import Stack


OPERATIONS = {
    '+': lambda value2, value1: value1 + value2,
    '-': lambda value2, value1: value1 - value2,
    '*': lambda value2, value1: value1 * value2,
    '/': lambda value2, value1: value1 / value2,
}


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token in OPERATIONS:
            result = OPERATIONS[token](float(stack.pop()), float(stack.pop()))
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()


if __name__ == "__main__":
    A = 2
    B = 3
    C = 5

    expr = f"{A} {B} + {C} {A} / -"
    print(f"A + B - C / A: {solve_expression(expr)}")

    expr = f"{B} {A} {C} * {C} / 2 * +"
    print(f"B + (A * C) / C * 2: {solve_expression(expr)}")

    expr = f"{A} {B} * {C} - 4 {A} * + {B} -"
    print(f"A * B - C + 4 * A - B: {solve_expression(expr)}")

    expr = f"{A} {C} {B} / + {A} {B} + *"
    print(f"(A + C / B) * (A + B): {solve_expression(expr)}")
