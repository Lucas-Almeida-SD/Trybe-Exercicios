import time
from os import getpid
from subprocess import check_output


def show_process():
    for i in range(20):
        print(f'\nCurrent process: {getpid()}\n')
        print(bytes(check_output(["ps"])).decode('utf-8'))
        time.sleep(1)


if __name__ == '__main__':
    show_process()
