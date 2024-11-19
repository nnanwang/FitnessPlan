# FitnessPlan

## 1.Backend Setup
### 1. Navigate to the backend directory:

#### Linux/Mac:
```
python -m venv venv
```
```
source venv/bin/activate
```
#### Windows:
```
python -m venv venv
```
```
venv\Scripts\activate
```

### 2. Install dependencies:
```
pip install -r requirements.txt
```
Create a ```.env``` file in the backend directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key
```

### 3. Run the Flask backend:
```
python app.py
```
The backend will run at http://127.0.0.1:5000.

## 2.Frontend Setup
### 1.Navigate to the frontend directory:
```
cd ../frontend
```
### 2.Install dependencies:
```
npm install
```
### 3.Start the React development server:
```
npm start
```
The frontend will run at http://localhost:3000.

