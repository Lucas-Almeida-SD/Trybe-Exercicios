from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()
firefox.get(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-" +
    "albuns-1982/"
)

all_paragraphs = firefox.find_elements(By.TAG_NAME, "p")

for paragraph in all_paragraphs:
    print(paragraph.text)
