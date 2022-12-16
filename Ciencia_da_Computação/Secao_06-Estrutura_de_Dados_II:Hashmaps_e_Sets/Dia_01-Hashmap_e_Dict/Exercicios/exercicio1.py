def words_that_can_be_formed_from_the_string(words, chars):
    acceptable_words = []
    chars_dict = {}

    for letter in chars:
        if letter not in chars_dict:
            chars_dict[letter] = 1
        else:
            chars_dict[letter] += 1

    for word in words:
        word_letter_dict = {}
        word_length = len(word)

        for index in range(word_length):
            letter = word[index]
            condition1 = letter not in chars_dict

            if letter not in word_letter_dict:
                word_letter_dict[letter] = 1
            else:
                word_letter_dict[letter] += 1

            if condition1 or word_letter_dict[letter] > chars_dict[letter]:
                break
            elif index == word_length - 1:
                acceptable_words.append(word)

    return acceptable_words


def sum_of_acceptable_words_length(acceptable_words):
    count = 0

    for word in acceptable_words:
        count += len(word)

    return count


print(sum_of_acceptable_words_length(
    words_that_can_be_formed_from_the_string(
        words=["hello", "world", "students"], chars="welldonehoneyr"
    )
))
