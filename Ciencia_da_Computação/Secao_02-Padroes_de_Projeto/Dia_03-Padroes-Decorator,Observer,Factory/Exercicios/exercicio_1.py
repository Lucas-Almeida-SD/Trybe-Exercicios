ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f'{VERMELHO}{self.log.dispara_log(message)}{VERMELHO}'


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f'{LARANJA}{self.log.dispara_log(message)}{LARANJA}'


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f'{VERDE}{self.log.dispara_log(message)}{VERDE}'


if __name__ == '__main__':
    log = Log()
    print(log.dispara_log('Log normal'))

    error = LogError(log)
    print(error.dispara_log('O sistema está com erros'))

    warning = LogWarning(log)
    print(warning.dispara_log('O sistema está lento'))

    success = LogSuccess(log)
    print(success.dispara_log('O sistema está funcionando'))
