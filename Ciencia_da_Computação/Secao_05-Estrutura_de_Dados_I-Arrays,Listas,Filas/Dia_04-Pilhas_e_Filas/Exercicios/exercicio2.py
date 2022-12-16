class Stack:
    def __init__(self):
        self.__stack = list()

    def is_empty(self):
        return not bool(len(self.__stack))

    def push(self, value):
        self.__stack.append(value)

    def pop(self):
        value_to_be_removed = self.__stack[-1]
        del self.__stack[-1]
        return value_to_be_removed

    def peek(self):
        if self.is_empty():
            return None

        return self.__stack[-1]


if __name__ == "__main__":
    stack = Stack()

    print(f"Is empty: {stack.is_empty()}")

    stack.push(1)
    stack.push(3)
    stack.push(2)

    print(f"Current element: {stack.peek()}")

    print(f"Deleted element: {stack.pop()}")
    print(f"Current element: {stack.peek()}")

    print(f"Deleted element : {stack.pop()}")
    print(f"Current element: {stack.peek()}")

    print(f"Deleted element: {stack.pop()}")
    print(f"Current element: {stack.peek()}")
