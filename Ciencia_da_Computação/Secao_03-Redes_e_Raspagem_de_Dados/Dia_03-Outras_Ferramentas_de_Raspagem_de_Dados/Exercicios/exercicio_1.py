from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()
firefox.get("https://quotes.toscrape.com/")

first_paragraph = (
    firefox.find_element(By.CLASS_NAME, "quote")
    .find_element(By.TAG_NAME, "span")
    .get_attribute("innerHTML")
)

print(first_paragraph)
