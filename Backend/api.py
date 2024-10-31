import web_scraper
from flask import Flask, request, jsonify

#  Create an api route that
#       takes in a url, 
#       scrapes the web (by calling the function that you and rachel created), and 
#       returns the final scraped content

# Creates Flask application
app = Flask(__name__)

# Creates API route
@app.route("/api/get_article/<path:url>") 
def get_article(url):
    heading, content, error = web_scraper.scrapeURL(url)
    data = {
        "Heading": heading,
        "Content": content,
        "Error": error
    }
    return jsonify(data)

# Runs Flask application (server)
if __name__ == "__main__":
    app.run(debug=True)