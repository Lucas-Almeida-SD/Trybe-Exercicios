from src.exercicio_1 import return_numeric_list
import pytest


def test_return_numeric_list_when_number_is_integer_returns_a_numeric_lists():
    expected_return = [
        1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11,
        'Fizz', 13, 14, 'FizzBuzz'
    ]
    assert return_numeric_list(15) == expected_return


def test_return_numeric_list_when_number_is_string_raises_an_exception():
    with pytest.raises(TypeError):
        return_numeric_list('str')
