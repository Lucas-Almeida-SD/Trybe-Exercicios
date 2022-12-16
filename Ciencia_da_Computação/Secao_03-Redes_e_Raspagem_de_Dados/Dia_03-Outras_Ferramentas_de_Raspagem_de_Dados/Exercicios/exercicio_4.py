import requests
from bs4 import BeautifulSoup

response = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")
soup = BeautifulSoup(response.text, 'html.parser')

links = soup.find_all("a")
for link in links:
    print(link.get('href'))
