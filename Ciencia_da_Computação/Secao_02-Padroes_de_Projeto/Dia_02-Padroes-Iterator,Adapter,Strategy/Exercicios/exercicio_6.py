from abc import ABC, abstractmethod


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto_strategy):
        return imposto_strategy.calcular_imposto(self.valor)


class ImpostoStrategy(ABC):
    @classmethod
    @abstractmethod
    def calcular_imposto(cls, valor):
        raise NotImplementedError


class IssStrategy(ImpostoStrategy):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.1


class IcmsStrategy(ImpostoStrategy):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.06


class PisStrategy(ImpostoStrategy):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.0065


class CofinsStrategy(ImpostoStrategy):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(IssStrategy)}")
print(f"ICMS: {orcamento.calcular_imposto(IcmsStrategy)}")
print(f"PIS: {orcamento.calcular_imposto(PisStrategy)}")
print(f"COFINS: {orcamento.calcular_imposto(CofinsStrategy)}")
