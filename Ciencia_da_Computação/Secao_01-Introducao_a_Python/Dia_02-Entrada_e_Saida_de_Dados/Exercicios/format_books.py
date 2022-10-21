import json
import ast

with open("books.json", mode="r") as file:
    content = file.readlines()
    convert_content = []
    for dictionary in content:
        convert_content.append(ast.literal_eval(dictionary))

with open("books.json", mode="w") as file:
    json.dump(convert_content, file)
