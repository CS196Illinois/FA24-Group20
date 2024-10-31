#  creating an api route 
#       that takes in a url, 
#       scrapes the web (by calling the function that you and rachel created), and 
#       returns the final scraped content

import web_scraper
from flask import Flask, request, jsonify

# Create Flask application
app = Flask(__name__)

# Create API route
@app.route("/<url>") 
def get_article_content(url):
    return web_scraper.scrapeURL(url)

# run Flask application (server)
if __name__ == "__api__":
    app.run(debug=True)