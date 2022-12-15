class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 1:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal in range(1, 100):
            self.__canal = canal
        else:
            raise ValueError

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
        {{
            'volume': {self.__volume}
            'canal': {self.__canal}
            'tamanho': {self.__tamanho}
            'ligada': {self.__ligada}
        }}
        """
