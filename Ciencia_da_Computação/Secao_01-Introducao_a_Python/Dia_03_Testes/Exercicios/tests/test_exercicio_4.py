from src.exercicio_4 import return_valid_emails
import pytest


@pytest.fixture
def valid_email_list():
    return [
        "nome@dominio.com",
        "teste@dominio.com",
    ]


def test_return_valid_emails_1(valid_email_list):
    assert return_valid_emails(valid_email_list) == valid_email_list
    print.assert_called_with(1)

# def test_return_valid_emails_2(valid_email_list):
#     print.assert_called_with(1)
