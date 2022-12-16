from stack import Stack


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.__limit = limit

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "LimitStack(" + str_items + ")"

    def __limit__(self):
        return self.__limit

    def push(self, value):
        if self.size() >= self.__limit:
            raise OverflowError("Não é possível adicionar outro item à pilha")
        else:
            self._data.append(value)


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = LimitStack(10)

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)

    print(f"Size: {content_stack.size()}")

    try:
        content_stack.push(11)
    except OverflowError as error:
        print(error)

    print(f"Size: {content_stack.size()}")

    print(f"Current element: {content_stack.peek()}")

    print(f"Deleted element: {content_stack.pop()}")

    print(f"Size: {content_stack.size()}")

    print(f"Current element: {content_stack.peek()}")
