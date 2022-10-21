import re


def check_email(email):
    isEmail = re.search(
        "^[a-z][a-z0-9-_]{1,}@[a-z0-9]{1,}\\.[a-z0-9]{1,3}$", email
    )
    if isEmail:
        return True
    else:
        print(f"Formato de email inválido -> {email}")
        return False


def return_valid_emails(email_list):
    valid_email_list = [email for email in email_list if check_email(email)]
    return valid_email_list


print(
    return_valid_emails(
        [
            "nome@dominio.com",
            "errad#@dominio.com",
            "outro@dominio.com",
            "nome@dominio.com",
            "outro@dominio.com",
            "errado@.com"
        ]
    )
)
