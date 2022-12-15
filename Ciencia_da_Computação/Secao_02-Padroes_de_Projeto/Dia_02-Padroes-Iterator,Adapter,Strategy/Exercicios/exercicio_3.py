from exercicio_2 import Baralho
from collections.abc import Iterator


class BaralhoInversoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = 0

    def __next__(self):
        if self.index >= len(self.cartas):
            raise StopIteration()

        carta = self.cartas[self.index]
        self.index += 1

        return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas[::-1])
