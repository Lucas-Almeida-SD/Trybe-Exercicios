from abc import ABC, abstractclassmethod
import math


class FiguraGeometrica(ABC):
    @abstractclassmethod
    def area():
        raise NotImplementedError

    @abstractclassmethod
    def perimetro():
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        super().__init__()
        self.__lado = lado

    def area(self):
        return self.__lado**2

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        super().__init__()
        self.__base = base
        self.__altura = altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return (self.__base * 2) + (self.__altura * 2)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        super().__init__()
        self.__raio = raio

    def area(self):
        return math.pi * (self.__raio**2)

    def perimetro(self):
        return 2 * self.__raio * math.pi
