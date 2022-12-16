class Node:
    def __init__(self, value):
        self.value = value
        self.previous = None
        self.next = None

    def __str__(self):
        return (
            f"Node(value={self.value},"
            f"previous={self.previous},"
            f"next={self.next})"
        )
