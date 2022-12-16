import requests
# from parsel import Selector

response = requests.get('http://quotes.toscrape.com/scroll')
print(response.text)
