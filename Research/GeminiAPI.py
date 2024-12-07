import google.generativeai as genai
import os
from nltk.sentiment.vader import SentimentIntensityAnalyzer


analyzer = SentimentIntensityAnalyzer()

genai.configure(api_key=os.environ["API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")


def provocative_language(text_to_summarize):

   prompt = f"Provide the 10 most strongly worded phrases or sentence in the following text and only include them as a list separated by a new line:\n\n{text_to_summarize}"

   response = model.generate_content(prompt)
   provocative_text = response._result.candidates[0].content.parts[0].text.split("\n")

   return provocative_text

# def negative_sentences(text, aspects):
#     prompt = f"in the following article:\n\n{text}\n\nProvide up to 20 of the most strongly positive, negative, or neutral phrases or sentences about {aspects[i]}. Do not include any text aside from the direct phrases from the article in your answer, and separate each phrase by a new line."


def negative_sentences(text_to_summarize, aspect):

    prompt = f"""Provide the 2-10 most negatively worded phrases or sentences against {aspect} in the following text and only include them as a list separated by a new line:
    If the article does not contain negatively worded phrases against {aspect}, then do not include them.
    
    \n\n{text_to_summarize}
"""

    response = model.generate_content(prompt)
    provocative_text = response._result.candidates[0].content.parts[0].text

    provocative_text = provocative_text.split("\n")
    return_ls = []
    for text in provocative_text :
        return_ls.append(text.strip("\"'"))

    return return_ls

def positive_sentences(text_to_summarize, aspect):

    prompt = f"""Provide the 2-10 most positively worded phrases or sentences with respect to {aspect} in the following text and only include them as a list separated by a new line:
    If the article does not contain positively worded phrases for {aspect}, then do not include them.
    
    \n\n{text_to_summarize}
"""

    response = model.generate_content(prompt)
    provocative_text = response._result.candidates[0].content.parts[0].text

    provocative_text = provocative_text.split("\n")
    return_ls = []
    for text in provocative_text :
        return_ls.append(text.strip("\"'"))

    return return_ls

def get_sentences(text, aspects):
    d = {} # aspect : sentences
    for aspect in aspects:
        d[aspect] = negative_sentences(text, aspect) + positive_sentences(text, aspect)
    return d


def get_average_sentiment_score(text, aspects):
    aspectToSentence = get_sentences(text, aspects)

    aspect_to_score = {}

    for aspect in aspectToSentence:
        # call get_sentiment_score with aspectToSentence[aspect]
        # add it to a dictionary
        aspect_to_score[aspect] = get_sentences_sentiment_score(aspectToSentence[aspect], True)

    return aspect_to_score


def get_aspect_to_score_map(phrases, telemetry):
    sentences = get_sentences()
    # call get_sentences
    # call get_average_sentiment_score to construct aspect_to_score_map
    pass

# def get_average_sentiment_score(text, aspects):

#    positive_phrases = {}

#    for i in range(len(aspects)):
#        prompt = f"in the following article:\n\n{text}\n\nProvide up to 20 of the most strongly positive, negative, or neutral phrases or sentences about {aspects[i]}. Do not include any text aside from the direct phrases from the article in your answer, and separate each phrase by a new line."
#        response = model.generate_content(prompt)
#        average = get_sentiment_score(response._result.candidates[0].content.parts[0].text.split("\n"), True)
#        print(f"SCORE FOR {aspects[i]} is {average}")

#    return positive_phrases

def get_sentence_sentiment_score(phrase, telemetry):
    score = analyzer.polarity_scores(phrase)
    for i in range(10):
        if score['compound'] == 0:
            score = analyzer.polarity_scores(phrase)
        else:
            break
    if score['compound'] != 0:
        return score['compound']
    if telemetry:
        print(f"{phrase} has a score of {score}")
    return 0

def get_sentences_sentiment_score(phrases, telemetry):
   compound_scores = []
   for phrase in phrases:
       compound_scores.append(get_sentence_sentiment_score(phrase, telemetry))
  
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