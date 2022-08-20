from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from .models.patient_model import Patient

bp = Blueprint('patient', __name__,url_prefix='/patient')


@bp.route("/add_details", methods=['POST'])
def add_details():
    data = request.json
    patient_id = data['patient_id']
    new_patient = Patient(data['full_name'], data['age'], data['telephone'], data['email'], data['location'],
                          data['religion_specification'], data['patient_id'], data['profile_photo'])


@bp.route('/get_doctors', methods=['GET'])
def get_doctors():
    # TODO: Check patient preferences and location before returning doctors
    # patient_id = request.args.get('patient_id')
    return db.reference('/doctors').get()
