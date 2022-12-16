from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()


def extract_data_from_post(post):
    post_data = dict()

    post_data["title"] = (
        post.find_element(By.CLASS_NAME, "entry-header")
        .text
    )

    post_data["link"] = (
        post.find_element(By.CLASS_NAME, "post-inner")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

    post_data["description"] = (
        post.find_element(By.CLASS_NAME, "entry-excerpt")
        .text
    )

    return post_data


def get_all_post_data_by_page():
    posts = firefox.find_elements(By.CLASS_NAME, "post-outer")
    posts_data_by_page = list()

    for post in posts:
        posts_data_by_page.append(extract_data_from_post(post))

    return posts_data_by_page


def get_all_post_data():
    firefox.get("https://diolinux.com.br/")

    post_data_list = (
        get_all_post_data_by_page()
    )

    return post_data_list


if __name__ == '__main__':
    all_post_data = get_all_post_data()

    for post_data in all_post_data:
        print(post_data)
