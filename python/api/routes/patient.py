from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from.models import patient.Patient


bp = Blueprint('patient',__name__,'/patient')

@bp.route("/patient/add_details", methods= ['POST'])

def add_details():
    data = request.json
    patient_id = data['patient_id']
    new_patient = Patient(data['full_name'],data['age'],data['telephone'],data['email'],data['location'],data['religion_specification'],data['patient_id'],data['profile_photo'])

