from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from.models import session.Session

bp = Blueprint('session',__name__,'/session')

@bp.route("/session/add_details", methods= ['POST'])

def add_details():
    data = request.json
    session_id = data['session_id']
    new_session = Session(data['session_id'],data['date'],data['meeting_type'],data['duration'],data['location'],data['doctor_id'],data['patient_id'],data['payment_method'])