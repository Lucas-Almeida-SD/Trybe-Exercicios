def mdc_aux(n1, n2, divider):
    if n1 == 1 and n2 == 1:
        return 1

    elif n1 % divider == 0 and n2 % divider == 0:
        return divider * mdc_aux(n1 / divider, n2 / divider, divider)

    elif n1 % divider == 0:
        return mdc_aux(n1 / divider, n2, divider)

    elif n2 % divider == 0:
        return mdc_aux(n1, n2 / divider, divider)

    else:
        return mdc_aux(n1, n2, divider + 1)


def mdc(n1, n2):
    divider = 2
    return mdc_aux(n1, n2, divider)
