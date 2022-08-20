from flask import request
from flask import Blueprint
from .models.session_model import Session
from firebase_admin import db

bp = Blueprint('session', __name__,url_prefix='/session')


@bp.route("/new", methods=['POST'])
def add_details():
    json = request.json
    data = json['session']
    new_session = Session(**data)
    session_id = data['session_id']
    db.reference('/sessions/' + session_id).set(new_session.__dict__)
    db.reference('/session_allocation/' + session_id + '/patient_id').set(data['patient_id'])
    return new_session.__dict__
