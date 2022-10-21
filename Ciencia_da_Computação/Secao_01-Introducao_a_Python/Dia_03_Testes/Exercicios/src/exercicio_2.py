import re

letters_dict = {
    'A': '2', 'B': '2', 'C': '2',
    'D': '3', 'E': '3', 'F': '3',
    'G': '4', 'H': '4', 'I': '4',
    'J': '5', 'K': '5', 'L': '5',
    'M': '6', 'N': '6', 'O': '6',
    'P': '7', 'Q': '7', 'R': '7', 'S': '7',
    'T': '8', 'U': '8', 'V': '8',
    'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
}


def convert_word_into_numbers(word):
    is_valid = re.search('^[A-Z01]{1,}$', word)
    if not is_valid:
        raise ValueError('Formato de expressão incorreto')

    new_word = ''
    for letter in word:
        if letter in letters_dict:
            new_word += letters_dict[letter]
        else:
            new_word += word
    return new_word


def convert_sentence_into_numbers(sentence):
    splited_sentence = sentence.split('-')
    new_sentence = list()
    for word in splited_sentence:
        new_sentence.append(convert_word_into_numbers(word))
    return '-'.join(new_sentence)
