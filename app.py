from flask import Flask, request, jsonify

from generateJWTscript import main

app = Flask(__name__)

@app.route('/jwt', methods=['GET', 'POST'])
def process_token():
    token = main()
    return token

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=8004)