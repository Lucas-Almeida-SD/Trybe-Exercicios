from subprocess import check_output

filters_OS = (
    "Nome do modelo",
    "CPU MHz máx.",
    "cache de L",
)

filters_RAM = ("available", "used")


def OS(filters):
    OS_file = bytes(
        check_output(["lscpu"])).decode("utf-8").strip().split("\n")
    OS_info = [info.split(':') for info in OS_file]
    OS_info = [(info[0], info[1].strip()) for info in OS_info]

    OS_dict = {}
    for title, value in OS_info:
        if title.startswith(filters):
            OS_dict[title.upper()] = value

    return OS_dict


def RAM(filters):
    RAM_file = bytes(
        check_output(["free"])).decode("utf-8").strip().split("\n")
    RAM_header = [word for word in RAM_file[0].split(" ") if word != ""]
    RAM_data = [word for word in RAM_file[1].split(" ") if word != ""]
    RAM_info = list(zip(RAM_header, RAM_data[1:]))

    RAM_dict = {}
    for title, value in RAM_info:
        if title.startswith(filters):
            RAM_dict[title.upper()] = f"{int(value) // 1024}MB"

    return RAM_dict


def show_informations(dictionary):
    for key in dictionary:
        print(f'{key}: {dictionary[key]}')


if __name__ == '__main__':
    print(f'{"-" * 10}Operation System{"-" * 10}')
    show_informations(OS(filters_OS))
    print(f'\n{"-" * 10}RAM{"-" * 10}')
    show_informations(RAM(filters_RAM))
