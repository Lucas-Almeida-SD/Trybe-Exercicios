import time
from resources import RAM, show_informations


filters_RAM = ("available", "used")

if __name__ == "__main__":
    while True:
        print(f'\n{"-" * 10}RAM{"-" * 10}')
        show_informations(RAM(filters_RAM))
        time.sleep(1)
