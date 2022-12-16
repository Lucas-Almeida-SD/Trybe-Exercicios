from pymongo import MongoClient

with MongoClient("mongodb://localhost:27020/") as client:
    db = client.library
    category = input("Digite uma categoria:\n")
    books = db.books.find(
        {
            "categories": category,
        }
    )
    for book in books:
        print(book["title"])
