from stack import Stack


class Garage:
    def __init__(self):
        self.__garage = Stack()
        self.__street = Stack()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self.__garage._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Garage(" + str_items + ")"

    def size(self):
        return self.__garage.size()

    def add(self, car):
        if car in self.__garage._data:
            print("Carro já estacionado")
        else:
            self.__garage.push(car)

    def remove(self, car):
        if self.__garage.is_empty() or car not in self.__garage._data:
            return None

        while self.__garage.peek() != car:
            self.__street.push(self.__garage.pop())

        removed_car = self.__garage.pop()

        while self.__street.size():
            self.__garage.push(self.__street.pop())

        return removed_car


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    garage = Garage()

    for elem in elements:
        garage.add(elem)

    print(garage)

    print(f"Amount of cars: {garage.size()}")

    garage.add(5)

    print(f"Removed car: {garage.remove(11)}")

    print(f"Removed car: {garage.remove(5)}")

    print(garage)

    print(f"Amount of cars: {garage.size()}")
