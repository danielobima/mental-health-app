from flask import Flask, request
from flask import Blueprint
from firebase_admin import db

bp = Blueprint('patient',__name__,'/patient')

@bp.route("/patient/add_details", methods= ['POST'])