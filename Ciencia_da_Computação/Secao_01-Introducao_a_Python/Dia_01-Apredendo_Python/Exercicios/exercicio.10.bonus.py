def valor_a_ser_pago_gasolina(litros):
    preco_da_gasolina = 2.5
    if litros <= 20:
        return (preco_da_gasolina - preco_da_gasolina * 0.3) * litros
    return (preco_da_gasolina - preco_da_gasolina * 0.5) * litros


def valor_a_ser_pago_alcool(litros):
    preco_do_alcool = 1.9
    if litros <= 20:
        return (preco_do_alcool - preco_do_alcool * 0.4) * litros
    return (preco_do_alcool - preco_do_alcool * 0.6) * litros


def valor_a_ser_pago_combustivel(tipo, litros):
    tipo_convertido = tipo.upper()

    if tipo_convertido == "A":
        return valor_a_ser_pago_alcool(litros)
    if tipo_convertido == "G":
        return valor_a_ser_pago_gasolina(litros)

    return "Tipo de combustível inexistente!"


print(valor_a_ser_pago_combustivel("a", 20))
