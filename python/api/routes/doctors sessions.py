from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from.models import doctors sessions.Doctors sessions


bp = Blueprint('doctors session',__name__,'/doctors sessions')

@bp.route("/doctors session/add_details", methods= ['POST'])

def add_details():
    data = request.json
    doctor_id = data['doctor_id']
    session_id = data['session_id']
    new_session = Doctors session(data['doctor_id'],data['session_id']