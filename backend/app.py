from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)
openai.api_key = 'YOUR_OPENAI_API_KEY'


@app.route('/get-fitness-plan', methods=['POST'])
def get_fitness_plan():
    data = request.json
    calorie = data.get('calorie', 0)

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f'Suggest a concise fitness plan based on the daily calorie: "{calorie}, please give me as bullet points and limit it to 200 tokens."'
                }
            ],
            temperature=0.7,
            max_tokens=200
        )
        fitness_plan = response['choices'][0]['message']['content']
        return jsonify({'success': True, 'fitnessPlan': fitness_plan})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'message': 'Failed to get fitness suggestions. Please try again.'})


if __name__ == '__main__':
    app.run(debug=True)
