import mysql.connector
from flask import Flask, request, session, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, world!'


@app.route('/login', methods=['GET', 'POST'])
def login():
    # Get the username and password from the login form
    username = request.form.get('username')
    password = request.form.get('password')
     
    # Connect to the database and retrieve the user data for the given username
    mydb = mysql.connector.connect(
      host="Marias-MacBook-Air.local",
      user="MariaEusse",
      password="Enero82002",
      database="app_users"
    )
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM user WHERE username=%s", (username,))
    user_data = mycursor.fetchone()
    
    # Check if the username exists and the password is correct
    if user_data is not None and user_data[2] == password:
        # If the user is authenticated, store the user_id in the session
        session['user_id'] = user_data[0]
        return 'Login successful!'
    else:
        return 'Invalid username or password.'

@app.route('/profile')
def profile():
    # Get the user_id from the session
    user_id = session.get('user_id')
    
    # Connect to the database and retrieve the user data for the given user_id
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="MariaEusse",
      password="",
      database="app_users"
    )
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM user WHERE user_id=%s", (user_id,))
    user_data = mycursor.fetchone()
    
    # Render the user's profile page with the saved concerts
    return render_template('profile.html', saved_concerts=user_data[3])


if __name__ == '__main__':
    app.run(debug=True)
