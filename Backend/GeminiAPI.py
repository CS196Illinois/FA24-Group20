from math import pi, tanh
import google.generativeai as genai
import os
import nltk
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from dotenv import load_dotenv
import json

analyzer = SentimentIntensityAnalyzer()

""" UNCOMMENT THIS OUT IF RUNNING LOCALLY"""
API_KEY = os.environ["API_KEY"]

""" UNCOMMENT THIS OUT IF RUNNING ON SERVER"""
# project_folder = os.path.expanduser('~/mysite')
# load_dotenv(os.path.join(project_folder, '.env'))
# API_KEY = os.getenv("API_KEY")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

"""
FUNCTIONS TO BE USED BY THE BACKEND
"""

def call_gemini_api_for_summary(text_to_summarize):

    print()

    print("this is my text to summarize:\n "+text_to_summarize)

    prompt = f"Summarize the following article:\n\n{text_to_summarize}"

    response = model.generate_content(prompt)
    summary_text = response._result.candidates[0].content.parts[0].text

    return summary_text


"""
input: article_text, aspect

returns:
{
"top_positive": a dictionary of top positive sentences to their scores
"top_negative": a dictionary of top negative sentences to their scores
"average_sentiment_score": average score for the article
"indices": a dictionary of sentences to a tuple of their indices (inclusive). Eg: {"sent 1": (1, 5)}

Note: for some sentences, if the indices were not found, they are set to (None, None) (or null, null)
}
"""
def get_sentiments(article_text, aspect):

   # TODO: aspect is not being used by get_sentence_sentiment_score; needs to be fixed!!
    
   top_positive = positive_sentences(article_text, aspect)
   top_negative = negative_sentences(article_text, aspect)
   all_sents = top_positive + top_negative

   top_positive_map = {}
   top_negative_map = {}

   for sent in top_positive:
      top_positive_map[sent] = get_sentence_sentiment_score(sent, False)

   for sent in top_negative:
      top_negative_map[sent] = get_sentence_sentiment_score(sent, False)

   indices_map = {}
   for sent in all_sents:
       
       if sent in article_text:
         start_i = article_text.index(sent)
         end_i = article_text.index(sent) + len(sent) - 1
         indices_map[sent] = (start_i, end_i)
       else:
         indices_map[sent] = (None, None)

   return {
       "top_positive": top_positive_map,
       "top_negative": top_negative_map,
       "average_sentiment_score": (sum(top_negative_map.values()) + sum(top_positive_map.values())) / len(all_sents),
       "indices": indices_map
   }


"""
HELPER FUNCTIONS
"""

def negative_sentences(text_to_summarize, aspect):

    prompt = f"""Provide the 2-10 most negatively worded phrases or sentences against {aspect} in the following text and only include them as a list separated by a new line:
    If the article does not contain negatively worded phrases against {aspect}, then do not include them.
    List them exactly how they are stated in the article. Please do not include any other information.
    Here is the article:
    
    \n\n{text_to_summarize}
"""

    response = model.generate_content(prompt)
    provocative_text = response._result.candidates[0].content.parts[0].text

    provocative_text = provocative_text.split("\n")
    return_ls = []
    for text in provocative_text :
        if len(text) <= 2: continue
        return_ls.append(text.strip("\"'"))

    return return_ls

def positive_sentences(text_to_summarize, aspect):

    prompt = f"""Provide the 2-10 most positively worded phrases or sentences with respect to {aspect} in the following text and only include them as a list separated by a new line:
    If the article does not contain positively worded phrases for {aspect}, then do not include them.
    List them exactly how they are stated in the article. Please do not include any other information.
    Here is the article:
    
    \n\n{text_to_summarize}
"""

    response = model.generate_content(prompt)
    provocative_text = response._result.candidates[0].content.parts[0].text

    provocative_text = provocative_text.split("\n")
    return_ls = []
    for text in provocative_text :
        if len(text) <= 2: continue
        return_ls.append(text.strip("\"'"))

    return return_ls

def get_sentence_sentiment_score(phrase, telemetry):
    score = analyzer.polarity_scores(phrase)
    for i in range(10):
        if score['compound'] == 0:
            score = analyzer.polarity_scores(phrase)
        else:
            break
    if score['compound'] != 0:
        # return score['compound']
        return tanh(1.5 * pi * score['compound'])
    if telemetry:
        print(f"{phrase} has a score of {tanh(1.5 * pi * score['compound'])}")
    return 0



article = """
====================HEADING====================
'Dead heat': Trump pulls even with Harris in NBC News poll
====================CONTENT====================

Profile
Sections
tv
Featured
More From NBC
Follow NBC News
There are no new alerts at this time
Former President Donald Trump and Vice President Kamala Harris are deadlocked in the latest national NBC News poll, with Trump bolstered by Republicans coming back home to support him after last month’s rough debate and a subsequent polling deficit, as well as by a favorable voter assessment of Trump’s term as president.
These are among the findings of a new survey released three weeks before Election Day, which also shows Harris’ popularity declining compared to a month ago, after she got a big summertime boost; a massive gender gap between support for Harris and Trump; and voters viewing abortion as a top motivating issue heading into the 2024 vote.
“As summer has turned to fall, any signs of momentum for Kamala Harris have stopped,” said Democratic pollster Jeff Horwitt, who conducted this survey with Republican pollster Bill McInturff. “The race is a dead heat.”
Follow live updates on the 2024 election
McInturff said “headwinds” for Harris have helped narrow the presidential contest, including concerns that the vice president doesn’t represent change from President Joe Biden and voters seeing Trump’s presidency in a more positive light than Biden’s.
“She is asking for another term from the incumbent party,” McInturff said of Harris.
Still, underlining the poll is uncertainty about the election (with 10% of voters saying they might change their minds and a sliver of unclaimed voters still on the fence), an all-time-high share of voters believing that this presidential election will make “a great deal of difference” in their lives, and key challenges for both Harris and Trump. The third-party vote could play a role, too — Trump gets a small boost when third-party candidates are included in the ballot test, to a 1-point edge.
And in a finely balanced election, even small changes in turnout among different groups could be the difference between a win and a loss for either party.       
“The challenge for Kamala Harris: Can she meet the moment and fill in the blanks that voters have about her?” asked Horwitt, the Democratic pollster.
“The challenge for Donald Trump: Can he make the case that the chaos and personal behavior that bothered so many about his first term will not get in the way of governing and representing America?” he added.
“The next month will tell whether the candidates can meet these challenges,” Horwitt said.
In the new poll — which was conducted Oct. 4-8 — Harris gets support from 48% of registered voters in a head-to-head matchup, while Trump gets an identical 48%. Another 4% say they are undecided or wouldn’t vote for either option when forced to choose between those two major-party candidates.
(Read more here from NBC News’ pollsters on why this poll measures registered voters and not likely voters.)
That’s a change from September’s NBC News poll, which found Harris leading Trump by 5 points, 49%-44%, though that result was within the margin of error.        
An expanded ballot including third-party candidates also shows this shift, with 47% of registered voters in the new poll picking Trump, 46% supporting Harris and a combined 7% picking other candidates or saying they’re undecided.
In September, however, Harris held a 6-point lead on this expanded ballot.
Given that close elections are often decided by which party better turns out its voters, the NBC News poll provides a snapshot of what could happen depending on different turnout scenarios.
Assuming a more favorable environment for Republicans — which means slightly greater turnout among men, white voters and voters without college degrees — Trump leads Harris by 2 points, 49%-47%.
But assuming a more favorable turnout environment for Democrats — which means more women, more white voters with college degrees and more voters of color showing up to the polls — these survey results show Harris leading Trump by 3 points among registered voters, 49%-46%.
All of these results are within the poll’s margin of error of plus or minus 3.1 percentage points.
(Read here for an in-depth breakdown of these different turnout scenarios and how they would affect the election.)
At 48%-48%, the survey results are as close as possible. But among different groups, there are enormous variations in candidate support.
The poll finds Harris with her biggest advantages over Trump among Black voters (84%-11%), younger voters ages 18 to 34 (57%-37%) and white voters with college degrees (55%-41%).
Trump, meanwhile, leads among rural voters (75%-23%), white voters (56%-42%) and whites without college degrees (65%-33%).
Yet what also stands out as one of the defining features of the election is a massive gender gap between Harris and Trump, with women supporting Harris by a 14-point margin (55%-41%) and men backing Trump by 16-points (56%-40%).
Independent voters are essentially split in the poll, with Harris getting support from 44% of them versus 40% choosing Trump. Compared to other groups, there are more independents who have yet to choose between Harris and Trump — or who say they don’t want to pick either of them.
Another significant change in the NBC News poll since September is Harris’ popularity.
One of the major developments in September’s NBC News poll, conducted after the Harris-Trump debate on Sept. 10, was her double-digit increase in popularity compared to earlier in the summer, before she became Democrats’ presidential candidate. Her ratings shot upward to 48% positive, 45% negative (a +3 net rating).     
But in this latest poll, Harris’ rating stands at 43% positive, 49% negative (-6), with the erosion coming mainly from independents and young voters.
That’s not too far removed from Trump’s 43% positive, 51% negative score (-8) in this same poll. That positive rating is Trump’s highest in the NBC News poll since he left office.
Another storyline from the poll is voters’ different views of Biden’s presidency versus Trump’s — a key question given the candidates’ efforts to cast themselves as agents of change in this election.
Twenty-five percent of voters say Biden’s policies have helped them and their families, compared with 45% who believe they’ve hurt them.
Those numbers are essentially flipped on views of Trump’s past presidency: 44% of voters say the former president’s policies helped them, versus 31% who say they hurt them.
What’s more, looking back on Trump’s presidency, 48% of voters say they approved of the former president’s job performance. That’s a higher job-approval rating than Trump ever held in the NBC News poll when he was president.
It also stands in contrast to Biden’s current 43% approval in the poll.
And asked what concerns them more — Harris continuing the same approach as Biden or Trump continuing the same approach from his first term as president — 43% of voters say they are more concerned about Harris following in Biden’s path, compared with 41% who are more worried about Trump repeating the actions of his term. 
“The fact that Harris trails even slightly on this measure is a warning sign, because voters are more likely to believe that Biden’s policies are hurting their family, while Trump’s policies helped their family,” said Horwitt, the Democratic pollster.
While most public polls, including September’s national NBC News poll, find the cost of living ranking as voters’ top concern, this survey asked a different question to get at voter intensity and motivation heading into Election Day: Is there one issue you feel so strongly about that you will vote for or against a candidate solely on that issue?
The top responses, with multiple allowed: abortion (22%), immigration/border security (19%), protecting democracy or constitutional rights (18%) and cost of living (16%).
The NBC News poll also tested Harris and Trump on nine different issues and presidential qualities, including who would better handle some of the key issues voters see as their top priorities.
Harris’ best issue versus Trump was abortion (19-point lead over Trump on handling the issue), health care (+10) and being competent and effective (+5).
Trump’s top issues and qualities: dealing with the border (+25), handling the situation in the Middle East (+18) and dealing with the cost of living (+11).      
On the key matter of which candidate better represents change, Harris is ahead of Trump by 5 points, 45% to 40%, but that’s down from her 9-point lead here in September.
Sixty-two percent of registered voters believe the upcoming presidential election will make a “great deal of difference” in their lives. That’s the highest response on this NBC News poll question dating back to 1992.
Like on the presidential ballot, Democrats and Republicans are tied on congressional preference, with 47% of registered voters preferring a Democratic-controlled Congress, and with an identical 47% wanting Republicans in charge. Democrats held a 2-point lead in September, 48%-46%, which was within the margin of error.   
And 31% of voters believe the nation is headed in the right direction, while 64% think it’s on the wrong track. The share of voters believing the country is on the wrong track is the lowest it’s been in the poll since August 2021, which was also the last time Biden had a positive job approval rating in the poll.
The NBC News poll of 1,000 registered voters, 898 of whom were reached by cellphone, was conducted Oct. 4-8. It has an overall margin of error of plus or minus 3.1 percentage points.
Mark Murray is a senior political editor at NBC News.
© 2024 NBC UNIVERSAL
"""  

if __name__ == "__main__":
   output = get_sentiments(article, "Trump")
   print(json.dumps(output, sort_keys=True, indent=2))