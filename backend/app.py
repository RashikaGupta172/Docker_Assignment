from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    return jsonify({"message": f"Hello {name}, your data is received!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

