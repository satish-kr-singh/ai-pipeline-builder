import os

from dotenv import load_dotenv

from utils.template_engine import render_template

from google import genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key = GEMINI_API_KEY)


def run_gemini(template: str, variables: dict):

    final_prompt = render_template(template, variables)

    response = client.models.generate_content(model ='gemini-2.5-flash',contents=final_prompt)

    return getattr(response, "text", str(response))