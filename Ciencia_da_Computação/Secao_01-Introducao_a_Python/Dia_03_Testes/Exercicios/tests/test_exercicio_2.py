import pytest
from src.exercicio_2 import convert_sentence_into_numbers


@pytest.fixture
def error_message():
    return "Formato de expressão incorreto"


def test_convert_sentence_into_numbers_1():
    '''Quando a função recebe a string "1-HOME-SWEET-HOME", retorna a string
     convertida em valores numéricos igual a "1-4663-79338-4663"'''
    expected_return = '1-4663-79338-4663'
    assert convert_sentence_into_numbers('1-HOME-SWEET-HOME') == (
        expected_return)


def test_convert_sentence_into_numbers_2():
    '''Quando a função recebe a string "MY-MISERABLE-JOB", retorna a string
     convertida em valores numéricos igual a "1-4663-79338-4663"'''
    expected_return = '69-647372253-562'
    assert convert_sentence_into_numbers('MY-MISERABLE-JOB') == (
        expected_return)


def test_convert_sentence_into_numbers_3(error_message):
    '''Quando a função recebe a string "MY-S2", deve lançar uma exceção"'''
    with pytest.raises(ValueError, match=error_message):
        convert_sentence_into_numbers('MY-S2')


def test_convert_sentence_into_numbers_4(error_message):
    '''Quando a função recebe a string "I-*-LOVE", deve lançar uma exceção"'''
    with pytest.raises(ValueError, match=error_message):
        convert_sentence_into_numbers('I-*-LOVE')
