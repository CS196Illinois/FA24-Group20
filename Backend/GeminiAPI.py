import google.generativeai as genai
import os
from dotenv import load_dotenv

# this code is required for the server to read the env variable (should be commented if running on local machine)
project_folder = os.path.expanduser('~/mysite')
load_dotenv(os.path.join(project_folder, '.env'))
API_KEY = os.getenv("API_KEY")

# this should work locally (need to export the environment variable on the terminal/cmd line)
# load_dotenv("..\\Backend\\.env")
# API_KEY = os.getenv("API_KEY")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def call_gemini_api_for_summary(text_to_summarize):

    print()

    print("this is my text to summarize:\n "+text_to_summarize)

    prompt = f"Summarize the following article:\n\n{text_to_summarize}"

    response = model.generate_content(prompt)
    summary_text = response._result.candidates[0].content.parts[0].text

    return summary_text