import web_scraper
from flask import Flask, request, jsonify

# Creates Flask application
app = Flask(__name__)

# Creates API route
@app.route("/api/get_article/<path:url>") 
def get_article(url):
    # Scrapes web by calling scrapeURL function
    heading, content, error = web_scraper.scrapeURL(url)
    data = {
        "Heading": heading,
        "Content": content,
        "Error": error
    }

    # Returns the final scraped content
    return jsonify(data)

# Runs Flask application (server)
if __name__ == "__main__":
    app.run(debug=True)