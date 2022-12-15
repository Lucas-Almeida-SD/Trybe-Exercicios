class Order:
    def __init__(
        self,
        items,
        credit_card_name,
        credit_card_number,
        credit_card_month,
        credit_card_year,
        credit_card_security_code,
    ):
        self.items = items
        self.credit_card_name = credit_card_name
        self.credit_card_number = credit_card_number
        self.credit_card_month = credit_card_month
        self.credit_card_year = credit_card_year
        self.credit_card_security_code = credit_card_security_code

    # ...


# Refatorando
class Card:
    def __init__(
        self,
        credit_card_name,
        credit_card_number,
        credit_card_month,
        credit_card_year,
        credit_card_security_code,
    ):
        self.credit_card_name = credit_card_name
        self.credit_card_number = credit_card_number
        self.credit_card_month = credit_card_month
        self.credit_card_year = credit_card_year
        self.credit_card_security_code = credit_card_security_code


class NewOrder:
    def __init__(self, items, card: Card):
        self.items = items
        self.card = card
