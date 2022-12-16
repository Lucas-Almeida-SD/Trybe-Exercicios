def number_of_students_in_the_library(entry, exit, target):
    counter = 0

    for index in range(len(entry)):
        if entry[index] <= target <= exit[index]:
            counter += 1

    return counter
