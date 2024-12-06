import requests

# ==============================================
# SCRAPE ARTICLE CONTENT:

# Define the API endpoint
# api_url_scrape_article = "http://127.0.0.1:5000/api/scrape_article" # host: local
api_url_scrape_article = "https://biasbuster.pythonanywhere.com/api/scrape_article" # host: PythonAnywhere 

# Sample HTML content to send to the API
# html_content = "<html><body><h1>Sample Article</h1><p>This is an example article content.</p></body></html>"

# Retrieves the entire contents of the HTML file entitled "html_test_file.html"
with open('C:\\Users\\drumm\\OneDrive\\Documents\\GitHub\\FA24-Group20\\Backend\\html_test_file.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# JSON payload
payload = {
    "html_content": html_content
}

# Send POST request to the API
response_scrape_article = requests.post(api_url_scrape_article, json=payload)

# Check if the request was successful
if response_scrape_article.status_code == 200:
    # Parse and print the response JSON
    data = response_scrape_article.json()
    print("Article Content:", data)
else:
    print(response_scrape_article)
    print(f"Error: {response_scrape_article.status_code}")
    print(response_scrape_article.text)

# ==============================================
# ARTICLE SUMMARY:

# Define the API endpoint
# api_url_get_summary = "http://127.0.0.1:5000/api/get_summary" # host: local
api_url_get_summary = "https://biasbuster.pythonanywhere.com/api/get_summary" # host: PythonAnywhere

# JSON payload
payload = {
    "scraped_content": data["Content"]
}

# Send POST request to the API
response_get_summary = requests.post(api_url_get_summary, json=payload)

# Check if the request was successful
if response_get_summary.status_code == 200:
    # Parse and print the response JSON
    data = response_get_summary.json()
    print("Article Summary:", data)
else:
    print(response_get_summary)
    print(f"Error: {response_get_summary.status_code}")
    print(response_get_summary.text)