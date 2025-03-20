from flask import Flask, render_template, request, redirect, url_for
import csv

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = {
            'name': request.form['name'],
            'phone': request.form['phone'],
            'email': request.form['email']
        }
        with open('users.csv', mode='a') as csv_file:
            fieldnames = ['name', 'phone', 'email']
            writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

            if csv_file.tell() == 0:
                writer.writeheader()

            writer.writerow(data)
        return redirect(url_for('index'))
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80)
