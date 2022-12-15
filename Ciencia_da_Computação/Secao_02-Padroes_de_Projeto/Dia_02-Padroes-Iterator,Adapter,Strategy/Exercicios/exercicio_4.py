from collections.abc import Iterable, Iterator
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, baralho_iterator_strategy):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__baralho_iterator_strategy = baralho_iterator_strategy

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return self.__baralho_iterator_strategy(self._cartas)


class BaralhoIteratorStrategy(ABC, Iterator):
    @abstractmethod
    def __next__(self):
        raise NotImplementedError


class BaralhoIteratorNormalStrategy(BaralhoIteratorStrategy):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = 0

    def __next__(self):
        if self.index >= len(self.cartas):
            raise StopIteration()

        carta = self.cartas[self.index]
        self.index += 1

        return carta


class BaralhoIteratorInversoStrategy(BaralhoIteratorStrategy):
    def __init__(self, cartas):
        self.cartas = cartas[::-1]
        self.index = 0

    def __next__(self):
        if self.index >= len(self.cartas):
            raise StopIteration()

        carta = self.cartas[self.index]
        self.index += 1

        return carta
