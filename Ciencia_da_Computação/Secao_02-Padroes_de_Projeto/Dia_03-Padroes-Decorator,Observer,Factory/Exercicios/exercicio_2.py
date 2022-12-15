from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.tarefas = []

    def adicionar_tarefa(self, tarefa):
        self.tarefas.append(tarefa)

    def acionar_todas_as_tarefas(self):
        for tarefa in self.tarefas:
            tarefa.acionar()

    def despertar(self):
        print('Alarme despertando: "cuco cuco...cuco cuco..."')
        self.acionar_todas_as_tarefas()


class Tarefa(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class TarefaAcenderLuzes(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Tarefa: Acender as luzes -> Acionada")


class TarefaPrepararCoffee(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Tarefa: Preparar o café -> Acionada")


class TarefaLigarComputador(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Tarefa: Ligar o computador -> Acionada")


if __name__ == "__main__":
    alarme = Alarme()

    TarefaAcenderLuzes(alarme)
    TarefaPrepararCoffee(alarme)
    TarefaLigarComputador(alarme)

    alarme.despertar()
