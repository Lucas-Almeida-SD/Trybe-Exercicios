from abc import ABC, abstractmethod


class Acesso(ABC):
    @abstractmethod
    def __repr__(self):
        raise NotImplementedError


class AcessoSuporte(Acesso):
    def __repr__(self):
        return "Suporte"


class AcessoVendas(Acesso):
    def __repr__(self):
        return "Vendas"


class AcessoFinanceiro(Acesso):
    def __repr__(self):
        return "Financeiro"


class Conta(ABC):
    def __init__(self):
        self.acessos = []
        self.criar_acesso()

    def criar_acesso(self):
        raise NotImplementedError

    def adiconar_acesso(self, acesso):
        self.acessos.append(acesso)

    def exibir_acessos(self):
        print(f'Permissões de acesso de {type(self).__name__}: {self.acessos}')


class ContaSuporte(Conta):
    def criar_acesso(self):
        self.adiconar_acesso(AcessoSuporte())


class ContaSuporteEVendas(Conta):
    def criar_acesso(self):
        self.adiconar_acesso(AcessoSuporte())
        self.adiconar_acesso(AcessoVendas())


class ContaGerente(Conta):
    def criar_acesso(self):
        self.adiconar_acesso(AcessoSuporte())
        self.adiconar_acesso(AcessoVendas())
        self.adiconar_acesso(AcessoFinanceiro())


if __name__ == '__main__':
    conta_suporte = ContaSuporte()
    conta_suporte_e_vendas = ContaSuporteEVendas()
    conta_gerente = ContaGerente()

    conta_suporte.exibir_acessos()
    conta_suporte_e_vendas.exibir_acessos()
    conta_gerente.exibir_acessos()
