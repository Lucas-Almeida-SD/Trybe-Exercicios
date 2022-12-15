import statistics


class Estatistica:
    @classmethod
    def media(self, number_list):
        Estatistica.__check_if_it_is_a_number_list(number_list)

        return statistics.mean(number_list)

    @classmethod
    def mediana(self, number_list):
        Estatistica.__check_if_it_is_a_number_list(number_list)

        return statistics.median(number_list)

    @classmethod
    def moda(self, number_list):
        Estatistica.__check_if_it_is_a_number_list(number_list)

        return statistics.mode(number_list)

    @classmethod
    def __check_if_it_is_a_number_list(self, number_list):
        if type(number_list) is not list:
            raise TypeError

        for num in number_list:
            if not str(num).isdigit():
                raise TypeError


print(Estatistica.moda([1, 2, 2, 4, 5, 3, 3, 3]))
