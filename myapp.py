from flask import Flask, render_template

 
app = Flask(__name__)
 

@app.route('/index')
def ind():
    return render_template('index.html')
    

@app.route('/signup')
def sign():
    return render_template('signup.html')

@app.route('/login')
def logn():
    return render_template('login.html')

@app.route('/calculator')
def cal():
    return render_template('calculator.html')

 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

