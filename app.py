from flask import Flask, render_template

app = Flask(__name__)

# Skills with progress (for animated bars)
SKILLS = [
    {"name": "Python", "level": 95, "color": "yellow"},
    {"name": "Artificial Intelligence", "level": 85, "color": "purple"},
    {"name": "Machine Learning", "level": 80, "color": "violet"},
    {"name": "Deep Learning", "level": 75, "color": "blue"},
    {"name": "Data Analysis (EDA)", "level": 90, "color": "emerald"},
    {"name": "Jupyter Notebook", "level": 95, "color": "orange"},
    {"name": "Speech Recognition", "level": 85, "color": "pink"},
    {"name": "Cloud Computing", "level": 70, "color": "sky"},
]

# Projects (with beautiful Unsplash / high-quality images)
PROJECTS = [
    {
        "id": 1,
        "title": "Hangman Game",
        "category": "python",
        "image": "https://picsum.photos/id/1015/800/600",
        "desc": "Interactive Python Hangman game with clean logic, user input, and ASCII art. Built during CodeAlpha internship.",
        "tags": ["Python", "Game Dev"],
        "link": "https://github.com/Muntazer72/CodeAlpha_Hangman_Game"
    },
    {
        "id": 2,
        "title": "Intelligent ChatBot",
        "category": "ai",
        "image": "https://picsum.photos/id/1005/800/600",
        "desc": "Smart Python chatbot that understands greetings, handles unknown queries, and provides graceful fallbacks.",
        "tags": ["Python", "AI", "NLP"],
        "link": "https://github.com/Muntazer72/CodeAlpha_Basic_ChatBot"
    },
    {
        "id": 3,
        "title": "Speech-to-Text Converter",
        "category": "ai",
        "image": "https://picsum.photos/id/133/800/600",
        "desc": "Converts WAV/MP3 audio files to text using Google Speech Recognition API + pydub for format handling.",
        "tags": ["Python", "Speech AI", "Jupyter"],
        "link": "https://github.com/Muntazer72/speech-to-text-python"
    },
    {
        "id": 4,
        "title": "Smart Student Evaluation System",
        "category": "ai",
        "image": "https://picsum.photos/id/201/800/600",
        "desc": "AI-powered system to evaluate student academic records. Built as Assignment for Hadi E-Learning Python + AI course.",
        "tags": ["Python", "AI", "Automation"],
        "link": "https://github.com/Muntazer72/smart-student-evaluation-system"
    },
    {
        "id": 5,
        "title": "Student Record Evaluator",
        "category": "python",
        "image": "https://picsum.photos/id/160/800/600",
        "desc": "Beginner-friendly Python tool using conditionals & variables to analyze and grade student performance.",
        "tags": ["Python", "Education"],
        "link": "https://github.com/Muntazer72/student-record-evaluator-python"
    },
    {
        "id": 6,
        "title": "EDA on Liver Disease Dataset",
        "category": "jupyter",
        "image": "https://picsum.photos/id/180/800/600",
        "desc": "Comprehensive Exploratory Data Analysis on liver patient dataset using Jupyter Notebook.",
        "tags": ["Jupyter", "Data Science", "Pandas"],
        "link": "https://github.com/Muntazer72/Assignment3-EDA-Liver-Dataset"
    }
]

@app.route('/')
def index():
    return render_template('index.html', 
                           skills=SKILLS, 
                           projects=PROJECTS)

if __name__ == '__main__':
    app.run(port =5004, host="0.0.0.0", debug=True)