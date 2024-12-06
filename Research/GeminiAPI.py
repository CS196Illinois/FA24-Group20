import google.generativeai as genai
import os
from nltk.sentiment.vader import SentimentIntensityAnalyzer


analyzer = SentimentIntensityAnalyzer()

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")


def provocative_language(text_to_summarize):

   prompt = f"Provide the 10 most strongly worded phrases or sentence in the following text and only include them as a list separated by a new line:\n\n{text_to_summarize}"

   response = model.generate_content(prompt)
   provocative_text = response._result.candidates[0].content.parts[0].text.split("\n")

   return provocative_text

def get_average_sentiment_score(text, aspects):

   positive_phrases = {}

   for i in range(len(aspects)):
       prompt = f"in the following article:\n\n{text}\n\nProvide up to 20 of the most strongly positive, negative, or neutral phrases or sentences about {aspects[i]}. Do not include any text aside from the direct phrases from the article in your answer, and separate each phrase by a new line."
       response = model.generate_content(prompt)
       average = get_sentiment_score(response._result.candidates[0].content.parts[0].text.split("\n"), True)
       print(f"score for {aspects[i]} is {average}")

   return positive_phrases

def get_sentiment_score(phrases, telemetry):
   compound_scores = []
   for phrase in phrases:
       score = analyzer.polarity_scores(phrase)
       compound_scores.append(score['compound'])
       if telemetry:
           print(f"{phrase} has a score of {score}")
  
   average_compound = sum(compound_scores) / len(compound_scores) if compound_scores else 0
   return average_compound

def get_sentiment_score_type(phrases, type):
   compound_scores = []
   for phrase in phrases:
       score = analyzer.polarity_scores(phrase)
       compound_scores.append(score[type])
  
   average_compound = sum(compound_scores) / len(compound_scores) if compound_scores else 0
   return average_compound

def ask_gemini(prompt):
   response = model.generate_content(prompt)
   return response._result.candidates[0].content.parts[0].text.split("\n")

def summarize(text_to_summarize):

   prompt = f"Summarize the following article:\n\n{text_to_summarize}"

   response = model.generate_content(prompt)
   summary_text = response._result.candidates[0].content.parts[0].text

   return summary_text