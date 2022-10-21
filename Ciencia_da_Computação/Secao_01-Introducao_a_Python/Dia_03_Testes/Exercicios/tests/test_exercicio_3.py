from src.exercicio_3 import check_email
import pytest


@pytest.fixture
def error_message():
    return "Formato de email inválido"


def test_check_email_1():
    '''Quando a função recebe a string "teste@teste.com",
    deve retornar "True"'''
    assert check_email("teste@teste.com") is True


def test_check_email_2(error_message):
    """Quando a função recebe a string "_teste@teste.com",
    deve lançar uma exceção"""
    with pytest.raises(ValueError, match=error_message):
        check_email("_teste@teste.com")


def test_check_email_3(error_message):
    """Quando a função recebe a string "testeteste.com",
    deve lançar uma exceção"""
    with pytest.raises(ValueError, match=error_message):
        check_email("testeteste.com")


def test_check_email_4(error_message):
    """Quando a função recebe a string "teste@teste.comm",
    deve lançar uma exceção"""
    with pytest.raises(ValueError, match=error_message):
        check_email("teste@teste.comm")


def test_check_email_5(error_message):
    """Quando a função recebe uma string vazia,
    deve lançar uma exceção"""
    with pytest.raises(ValueError, match=error_message):
        check_email("")
