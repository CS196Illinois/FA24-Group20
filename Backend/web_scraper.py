import requests
from bs4 import BeautifulSoup

def scrapeURL(my_url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    }

    page = requests.get(my_url)

    if page.status_code == 200:
        soup = BeautifulSoup(page.text, 'html.parser')
        heading = soup.find('h1').get_text()
        content = soup.find_all('p')
        str_content = []
        error = None
        
        print("====================HEADING====================")
        print(heading)
        print("====================CONTENT====================")
        for paragraph in content:
            str_content.append(paragraph.get_text())
            print(paragraph.get_text())
        
        return heading, str_content, error
    else:
        error = 'Failed to get page contents.'
        print("Failed to get page contents.")

    return None, None, error

def scrapeHTMLFile(my_html_file):
    with open(my_html_file, 'r', encoding='utf-8') as file:
        page = file.read()

    soup = BeautifulSoup(page, 'html.parser')
    heading = soup.find('h1').get_text()
    content = soup.find_all('p')
    str_content = []
    
    print("====================HEADING====================")
    print(heading.get_text())
    print("====================CONTENT====================")
    for paragraph in content:
        str_content.append(paragraph.get_text())
        print(paragraph.get_text())
    
    return heading, str_content