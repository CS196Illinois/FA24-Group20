import web_scraper
import GeminiAPI
from flask import Flask, jsonify, request

# UNCOMMENT THIS IF RUNNING ON SERVER
# from flask_cors import CORS


# Creates Flask application
app = Flask(__name__)
# UNCOMMENT THIS IF RUNNING ON SERVER
# CORS(app)

"""
Description: Retrieves the article's heading and contents given an HTML file.

Args:
    payload (JSON):
        html_content: (string) - The entire contents of the given HTML file.

    Example:
    {
        "html_content": "<html><body><h1>Sample Article</h1><p>This is an example article content.</p></body></html>"
    }

Returns:
    JSON object containing:
        heading: (string) - The heading of the article.
        content: (string) - The contents of the article.
        error: (Exception) - Error message.

    Example:
    {
        "Heading": "Sample Article",
        "Content": "This is an example article content",
        "Error": None
    }

"""
@app.route("/api/scrape_article", methods=["POST"])
def scrape_article():
    try:
        # Retrieve JSON data
        request_data = request.get_json()
        html_content = request_data.get("html_content")

        # Validate HTML content
        if not html_content:
            return jsonify({"Error": "No HTML content provided"}), 400

        # Scrape the HTML file
        heading, content, error = web_scraper.scrapeHTMLContent(html_content)

        # Prepare response data
        data = {
            "Heading": heading,
            "Content": content,
            "Error": error
        }
        return jsonify(data)

    except Exception as e:
        # Return detailed error message
        return jsonify({"Error": str(e)}), 500

"""
Description: Retrieves a summary of the article given the article's contents.

Args:
    payload (JSON):
        scraped_content: (string) - The scraped contents of the article.

Returns:
    JSON object containing:
        summary: (Any) - The summary of the article.

"""
@app.route("/api/get_summary", methods=["POST"])
def get_summary():
    try:
        # Retrieve JSON data
        request_data = request.get_json()
        scraped_content = request_data.get("scraped_content")

        # Validate HTML content
        if not scraped_content:
            return jsonify({"Error": "No HTML content provided"}), 400

        # Summarize the scraped content
        summary = GeminiAPI.call_gemini_api_for_summary(scraped_content)

        # Prepare response data
        data = {
            "Summary": summary,
        }
        return jsonify(data)

    except Exception as e:
        # Return detailed error message
        return jsonify({"Error": str(e)}), 500

"""
Description: Retrieves a summary of the article given the article's contents.

Args:
    payload (JSON):
        scraped_content: (string) - The scraped contents of the article.
        aspect: (string) - The aspect based on which we want to analyze the article

Returns:
    JSON object containing:
    {
    "top_positive": a dictionary of top positive sentences to their scores
    "top_negative": a dictionary of top negative sentences to their scores
    "average_sentiment_score": average score for the article
    "indices": a dictionary of sentences to a tuple of their indices (inclusive). Eg: {"sent 1": (1, 5)}

    Note: for some sentences, if the indices were not found, they are set to (None, None) (or null, null)
    }

"""
@app.route("/api/get_sentiment_scores", methods=["POST"])
def get_sentiment_scores():
    try:
        # Retrieve JSON data
        request_data = request.get_json()
        scraped_content = request_data.get("scraped_content")
        aspect = request_data.get("aspect")

        # Validate HTML content
        if not scraped_content:
            return jsonify({"Error": "No HTML content provided"}), 400

        # Get Sentiment Data
        scores_data = GeminiAPI.get_sentiments(scraped_content, aspect)

        return jsonify(scores_data)

    except Exception as e:
        # Return detailed error message
        return jsonify({"Error": str(e)}), 500

@app.route('/')
def home():
    return "Welcome to the BiasBusters api!"

# Runs Flask application
if __name__ == "__main__":
    app.run()

"""
EXAMPLE
If we have
    url = https://apnews.com/article/trump-california-coachella-nevada-arizona-newsom-4557c2f98ffc179178fe5b6ec5bcf8aa
this is what is passed to the function call_gemini_api_for_summary(text_to_summarize):
    text_to_summarize = Copyright 2024 The Associated Press. All Rights Reserved. Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump addresses the crowd as he departs after speaking at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump speaks at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump speaks at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump speaks at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump puts on a campaign hat as he speaks at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Attendees and members of law enforcement watch as Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon) Republican presidential nominee former President Donald Trump arrives to speak at a campaign rally at the Calhoun Ranch, Saturday, Oct. 12, 2024, in Coachella, Calif. (AP Photo/Alex Brandon)                       Follow live: Updates from AP’s coverage of the presidential election. COACHELLA, Calif. (AP) — With the presidency on the line in battlegrounds like Wisconsin and Pennsylvania, Donald Trump spent Saturday night in solidly liberal California, seeking to link Vice President Kamala Harris to what he described as the failures of her home state. Trump is almost certain to lose California, and that won’t change after his Saturday stop in Coachella, a desert city east of Los Angeles best known for the annual music festival bearing its name. Still, Trump took advantage of his visit to tear into the nation’s most populous state, bringing up its recent struggles with homelessness, water shortages and a lack of affordability. Harris, the Democratic nominee, was previously the state’s junior senator and attorney general. “We’re not going to let Kamala Harris do to America what she did to California,” Trump said, referring to the state as as “Paradise Lost.” The former president lost California in a landslide in 2020. He did get 6 million-plus votes, more than any GOP presidential candidate before, and his margins topped 70% in some rural counties that typically favor conservatives on the ballot. That’s an enormous pool of potential volunteers to work on state races and participate in phone banks into the most contested states. And Trump drew media coverage in the Los Angeles market, the second-largest in the country.  Trump visited Coachella in between stops in Nevada, at a roundtable in Las Vegas for Latinos earlier Saturday — where he praised Hispanics as having “such energy” — and Arizona, for a rally Sunday in Prescott Valley. He narrowly lost those two swing states to Democrat Joe Biden in 2020. Attendees who waited in broiling temperatures that approached 100 degrees Fahrenheit (38 degrees Celsius) said they didn’t expect Trump to win their state but were thrilled to see him.  “It’s like a convention of like-minded people,” said Tom Gibbons of Palm Desert, who’s backed Trump since 2016 but been unable to see him in person until Saturday, as he waited in line. “Everybody understands the heartbeat of America, the plight of the working man ... It’s reassuring.” Going to California gives Trump the “ability to swoop in and leverage this big population of Trump supporters,” said Tim Lineberger, who was communications director for Trump’s 2016 campaign in Michigan and also worked in the former president’s administration. He’s “coming here and activating that.” Lineberger recalled Californians making calls to Michigan voters in 2016 on Trump’s behalf and said the campaign’s decision to go into safe, Democratic turf at this point was “an aggressive, offensive play.” California is also a fountain of campaign cash for both parties, and Trump will be fundraising. Photos with the former president in Coachella were priced at $25,000, which comes with special seating for two. A “VIP Experience” was priced at $5,000.  Speaking for 80 minutes Saturday night, Trump ran through the standard list of Republican complaints about the Democrat-dominated state — its large number of immigrants in the U.S. illegally, its homeless population and its thicket of regulations — and waded into a water rights battle over the endangered Delta smelt that has pitted environmentalists against farmers.  The former president was particularly scathing about illegal immigration, warning at one point: “Your children are in danger. You can’t go to school with these people, these people are from a different planet.” What to know about the 2024 Election He continued his long-running spat with Democratic Gov. Gavin Newsom, whom Trump called “New-scum.” Trump again threatened Newsom over the water rights battle, saying that if he didn’t act in favor of farmers, “we’re not giving you any of that fire money that we send you all the time for all the forest fires that you have.” Republicans beforehand listed a number of potential reasons for Trump’s visit. With congressional races in play that could determine which party controls the House, the Coachella rally “is a get-out-the-vote type of thing that motivates and energizes Republicans in California, when they are not as close to what is going on in the national campaign,” Republican consultant Tim Rosales said. Jim Brulte, a former chairman of the California Republican Party, said he thinks Trump is angling for something that has eluded him in previous campaigns: winning more total votes than his Democratic opponent. “I believe Donald Trump is coming to California because he wants to win not only in the Electoral College, but he wants to win the popular vote. There are more registered voters in California than there are residents in 46 of the other 49 states,” Brulte said. The Trump National Golf Club Los Angeles sits on the Pacific Coast, south of the city. But Trump has long had a conflicted relationship with California, where a Republican has not carried the state since 1988 and Democrats outnumber registered Republicans by about 2-to-1. California was home to the so-called Trump resistance during his time in office, and Trump often depicts California as representing all he sees wrong in America. As president, he called the homeless crises in Los Angeles and San Francisco disgraceful and threatened to intercede. Newsom on Wednesday predicted Trump would be denigrating his state at the rally, overlooking its strengths as the world’s fifth-largest economy. The governor said that for the first time in a decade, California has more Fortune 500 companies than any other state. “You know, that’s not what Trump is going to say,” he predicted. Blood reported from Los Angeles. Associated Press writers Thomas Beaumont in Las Vegas and Nicholas Riccardi in Denver contributed to this report. Copyright 2024 The Associated Press. All Rights Reserved.
"""
