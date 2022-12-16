import requests
from parsel import Selector


BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(BASE_URL)

selector = Selector(text=response.text)
flags = selector.css('.thumb a img::attr(src)').getall()

for flag in flags:
    print('https:' + flag)
