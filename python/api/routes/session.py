import time

from flask import request
from flask import Blueprint
from .models.session_model import Session
from firebase_admin import db

bp = Blueprint('session', __name__, url_prefix='/session')


@bp.route("/new", methods=['POST'])
def add_details():
    json = request.json
    data = json['session']
    new_session = Session(**data)
    session_id = data['session_id']
    db.reference('/sessions/' + session_id).set(new_session.__dict__)
    session_allocation = {'patient_id': data['patient_id'], 'session_id': session_id, 'doctor_id': data['doctor_id'],
                          'date_created': int(round(time.time() * 1000))}
    db.reference('/session_allocation/' + session_id).set(session_allocation)
    return new_session.__dict__


@bp.route('/get_sessions', methods=['GET'])
def get_sessions():
    user_type = request.args.get('user_type')
    user_id = request.args.get('user_id')
    return db.reference('/session_allocation/').order_by_child('date_created').get()
