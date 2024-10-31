import requests
from bs4 import BeautifulSoup

# Takes a web URL and returns the heading and contents of the article
def scrapeURL(my_url):
    # Passes a User-Agent header request to avoid error response from web server (might reject GET request if user agent is unknown)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    }

    # Uses requests library to call a GET method and returns the response
    page = requests.get(my_url)

    if page.status_code == 200: # HTTP status code 200 indicates a request has succeeded
        # Uses BeautifulSoup to parse raw HTML data and return desired data
        soup = BeautifulSoup(page.text, 'html.parser') 
        
        # Uses soup instance to find all elements for headings and page content based on tags
        heading = soup.find('h1').get_text()
        content = soup.find_all('p')
        
        str_content = [] # Creates a list to store the page content as Strings
        error = None
        
        # Prints the article heading and content to the terminal
        print("====================HEADING====================")
        print(heading)
        print("====================CONTENT====================")
        for paragraph in content:
            str_content.append(paragraph.get_text()) # Adds each paragraph of page content to the list
            print(paragraph.get_text())
        
        # Returns the article heading as a String and the contents as a list of Strings
        return heading, str_content, error
    else:
        # Error response if GET request fails
        error = 'Failed to get page contents.'
        print("Failed to get page contents.")

    return None, None, error

# Takes an HTML file and returns the heading and contents of the article
def scrapeHTMLFile(my_html_file):
    # Retrieves the entire contents of the HTML file
    with open(my_html_file, 'r', encoding='utf-8') as file:
        page = file.read()

    # Uses BeautifulSoup to parse raw HTML data and return desired data
    soup = BeautifulSoup(page, 'html.parser')
    
    # Uses soup instance to find all elements for headings and page content based on tags
    heading = soup.find('h1').get_text()
    content = soup.find_all('p')
    
    str_content = [] # Creates a list to store the page content as Strings
    
    # Prints the article heading and content to the terminal
    print("====================HEADING====================")
    print(heading.get_text())
    print("====================CONTENT====================")
    for paragraph in content:
        str_content.append(paragraph.get_text()) # Adds each paragraph of page content to the list
        print(paragraph.get_text())
    
    # Returns the article heading as a String and the content as a list of Strings
    return heading, str_content