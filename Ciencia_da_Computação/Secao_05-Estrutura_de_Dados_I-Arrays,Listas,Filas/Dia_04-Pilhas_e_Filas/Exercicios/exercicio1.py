from linked_list import LinkedList


class Queue:
    def __init__(self):
        self.__linked_list = LinkedList()

    def __str__(self):
        return (
            f"Queue(len={len(self.__linked_list)},"
            f"value={self.__linked_list.head_value})"
        )

    def __len__(self):
        return len(self.__linked_list)

    def is_empty(self):
        return self.__linked_list.is_empty()

    def enqueue(self, value):
        self.__linked_list.insert_last(value)

    def dequeue(self):
        value = self.peek()
        self.__linked_list.remove_first()
        return value

    def peek(self):
        return self.__linked_list.head_value


if __name__ == "__main__":
    queue = Queue()
    print(f"Is empty: {queue.is_empty()}")

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    print(f"Size: {len(queue)}")
    print(f"First element: {queue.peek()}")
    print(queue)

    queue.dequeue()
    print(f"Size: {len(queue)}")
    print(f"First element: {queue.peek()}")
    print(queue)

    queue.dequeue()
    print(f"Size: {len(queue)}")
    print(f"First element: {queue.peek()}")
    print(queue)

    queue.dequeue()
    print(f"Size: {len(queue)}")
    print(queue)
