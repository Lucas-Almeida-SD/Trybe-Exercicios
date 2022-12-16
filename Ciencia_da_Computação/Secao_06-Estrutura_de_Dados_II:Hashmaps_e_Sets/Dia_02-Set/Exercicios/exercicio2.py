def get_substring_list(string):
    get_substring = ''
    caracterer_set = set()
    string_list = list()

    for index, letter in enumerate(string):
        if letter not in caracterer_set:
            get_substring += letter
        else:
            string_list.append(get_substring)
            get_substring = letter
            caracterer_set.clear()

        if index == len(string) - 1:
            string_list.append(get_substring)
        caracterer_set.add(letter)

    return string_list


def substring(string: str):
    largest_substring_length = 0
    letters_set = set()

    for letter in string:
        if letter not in letters_set:
            largest_substring_length += 1
            letters_set.add(letter)

    return largest_substring_length


print(substring("serdevemuitolegalmasehprecisoestudarbastante"))
