import re


def check_email(email):
    isEmail = re.search(
        '^[a-z][a-z0-9-_]{1,}@[a-z0-9]{1,}\\.[a-z0-9]{1,3}$',
        email
    )
    if isEmail:
        return True
    raise ValueError('Formato de email inválido')
