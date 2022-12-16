class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"

    def min_value(self):
        if self.is_empty():
            return None

        return min(self._data)


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(f"Content: {content_stack}")
    print(f"Size: {content_stack.size()}")
    print(f"Current element: {content_stack.peek()}")
    print(f"Min element: {content_stack.min_value()}")
    print(f"Deleted element: {content_stack.pop()}")
    print(f"Current element: {content_stack.peek()}")
    print(f"Size: {content_stack.size()}")
    print(f"Clear: {content_stack.clear()}")
    print(f"Size: {content_stack.size()}")
    print(f"Min element: {content_stack.min_value()}")
