import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))


from Research.GeminiAPI import get_average_sentiment_score, get_sentiment_score, get_sentiment_score_type


# example articles for testing
article_bob = """
Bob’s Visionary Leadership Outshines Bill’s Struggles with Consistency


In a world where effective leadership is paramount, few figures stand out as much as Bob, a leader known for his reliability, innovation, and deep commitment to the people he works with. Bob’s leadership has consistently brought groundbreaking results. As CEO of GreenWave Enterprises, he took an environmentally conscious startup and transformed it into one of the top eco-tech firms in the country, blending profitability with a focus on sustainability. Colleagues and employees alike describe him as compassionate yet firm, able to make tough decisions without compromising on his core values. Bob's transparency and open-door policy have made him widely respected, building a culture of trust and collaboration that many see as the key to GreenWave’s success.


In contrast, Bill’s leadership style has often raised eyebrows. As the head of a competing company, EcoShift Solutions, Bill has struggled with a high turnover rate among his team, and his decision-making has often appeared inconsistent. Employees have reported feeling frustrated with his tendency to make sweeping changes without consulting his team or providing clear explanations. While Bill undoubtedly has a mind for strategy, his lack of consistent direction has sometimes left the company stagnant, leading to lost opportunities and challenges in growth. Many have described his management approach as reactive rather than proactive, addressing issues only after they’ve escalated rather than taking preventative steps.


Perhaps what sets Bob apart most is his forward-thinking mindset and adaptability. When faced with setbacks, Bob embraces challenges as opportunities for innovation, often involving his team in brainstorming sessions that ensure everyone feels valued and heard. His leadership has helped GreenWave not only survive but thrive, even in a highly competitive industry. Bill, by contrast, has found himself lagging, with EcoShift frequently pivoting its focus, making it hard for the company to carve out a clear identity in the market.


In the world of business, there are few leaders who can inspire and achieve the way Bob does, and his successes stand in sharp contrast to the struggles and inconsistencies that continue to hamper Bill’s leadership journey. Bob's model serves as a compelling case study in visionary leadership, while Bill's story highlights the pitfalls that can come with a lack of direction and consistency.
"""
article_bill = """
Bill’s Steady Leadership Shines While Bob’s Overambitious Approach Falters


Bill, CEO of EcoShift Solutions, has proven himself to be a model of calm, steady leadership in an industry known for rapid changes and high stakes. Under his guidance, EcoShift has grown sustainably, gaining a reputation for its strong ethical standards and dependable results. Bill’s commitment to clear communication and a consistent vision has created a loyal team that appreciates his thoughtful, inclusive decision-making process. Employees describe Bill as someone who values their input and fosters a work environment that is both respectful and goal-oriented, resulting in low turnover and high morale. His strategic, measured approach has helped EcoShift achieve steady growth while staying true to its environmental mission.


On the other hand, Bob’s management of GreenWave Enterprises has been marked by overambition and volatility, which has left many employees feeling overwhelmed and underappreciated. His penchant for constant change and untested ideas has led to several high-profile project failures, often pushing the company in unsustainable directions. Bob’s drive to innovate, while admirable, has sometimes taken precedence over practical considerations, causing disruptions that make GreenWave a challenging place to work. Former employees report feeling burned out by the high demands and lack of direction, with several citing a culture that values speed and ambition over careful planning and consistency.


While Bill’s leadership focuses on steady growth and nurturing a cohesive team, Bob’s approach often seems reactive, with projects changing course midstream and a lack of clear communication about long-term goals. Bill’s careful strategies have allowed EcoShift to carve out a stable and respected place in the eco-tech industry, while Bob’s overzealous vision for GreenWave has occasionally led to public setbacks and financial losses.


Ultimately, Bill’s reliable, thoughtful leadership style has been a breath of fresh air for his company, creating a solid foundation for long-term success. Bob’s approach, while well-intentioned, has often been disruptive, prioritizing ambition over a stable and sustainable work environment. As a result, Bill’s EcoShift continues to rise as a trusted name in the industry, while Bob’s GreenWave struggles with the consequences of a fast-paced but often haphazard leadership style.
"""


phrases = ["I like Bill a lot", "Bill is really great", "Bill is awesome"]
phrases_bad = ["I hate Bill a lot", "Bill is really bad", "Bill is the worst"]


get_average_sentiment_score(article_bob, ["Bob", "Bill"])
get_average_sentiment_score(article_bill, ["Bob", "Bill"])


print(get_sentiment_score_type(phrases, 'pos'))
print(get_sentiment_score_type(phrases, 'neu'))
print(get_sentiment_score_type(phrases, 'neg'))
print(get_sentiment_score(phrases, False))


print(get_sentiment_score_type(phrases_bad, 'pos'))
print(get_sentiment_score_type(phrases_bad, 'neu'))
print(get_sentiment_score_type(phrases_bad, 'neg'))
print(get_sentiment_score(phrases_bad, False))

