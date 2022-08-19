from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from.models import doctor.Doctor


bp = Blueprint('doctor',__name__,'/doctor')

@bp.route("/doctor/add_details", methods= ['POST'])

def add_details():
    data = request.json
    doctor_id = data['doctor_id']
    new_doctor = Doctor(data['full_name'],data['age'],data['telephone'],data['email'],data['location'],data['religion'],data['doctor_id'],data['profile_photo'])
