from app import app, db
from app.models.user import User
from flask import abort, jsonify, request, session
import datetime
import json

@app.route('/noviga/register', methods=['POST'])
def register():
    json_data = request.json
    user = User(
        username=json_data['username'],
        password=json_data['password'],
        email=json_data['email']
    )
    try:
        db.session.add(user)
        db.session.commit()
        status = 'success'
    except:
        status = 'this user is already registered'
    db.session.close()
    return jsonify({'result': status})


@app.route('/noviga/login', methods=['POST'])
def login():
    json_data = request.json
    user = User.query.filter_by(username=json_data['username']).first()
    if user and user.password==json_data['password']:
        session['logged_in'] = True
        status = True
    else:
        status = False
    return jsonify({'result': status})


@app.route('/noviga/logout')
def logout():
    session.pop('logged_in', None)
    return jsonify({'result': 'success'})


@app.route('/noviga/status')
def status():
    if session.get('logged_in'):
        if session['logged_in']:
            return jsonify({'status': True})
    else:
        return jsonify({'status': False})
