from pymongo import MongoClient


def add_books_quantity_by_category_in_dict(dict, categories):
    for category in categories:
        if category in dict:
            dict[category] += 1
        else:
            dict[category] = 1


def print_book_category_in_descending_order(books_quantity_by_category):
    print(books_quantity_by_category)
    sorted_dict = sorted(
        books_quantity_by_category,
        key=books_quantity_by_category.get,
        reverse=True
    )

    for category in sorted_dict:
        print(category, books_quantity_by_category[category])


with MongoClient("mongodb://localhost:27020/") as client:
    db = client.library
    books = db.books.find({
        "status": "PUBLISH"
    })
    books_quantity_by_category = dict()

    # for book in books:
    #     add_books_quantity_by_category_in_dict(
    #         books_quantity_by_category,
    #         book["categories"]
    #     )

    # print_book_category_in_descending_order(books_quantity_by_category)
