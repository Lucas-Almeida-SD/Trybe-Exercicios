import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/"

response = requests.get(f"{URL_BASE}catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)

imageURL = selector.css("#product_gallery img::attr(src)").get()
imageURL = URL_BASE + imageURL

title = selector.css(".product_main h1::text").get()

price = selector.css(
    ".product_main .price_color::text").re_first(r"\d+\.\d{2}")

description = selector.css("#product_description + p::text").get()

print(
    f"Título: {title}\n"
    f"Preço: {price}\n"
    f"Descrição: {description}\n"
    f"URl da imagem: {imageURL}"
)
