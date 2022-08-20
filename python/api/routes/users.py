from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from .models.users_model import Users
from firebase_admin import storage

bp = Blueprint('users', __name__, url_prefix='/users')


@bp.route('/new', methods=['POST'])
def new_user():
    data = request.json['user']
    user = Users(**data)
    db_reference = "users/" + user.user_id
    db.reference(db_reference).set(user.__dict__)
    return 'Success'


@bp.route('/type', methods=['GET'])
def get_user_type():
    user_id = request.args.get('user_id')
    user_type = db.reference("users/" + user_id + '/user_type').get()
    user_details = False
    if user_type == 0:
        user_details = db.reference('patients/' + user_id).get()
    else:
        user_details = db.reference('doctors/' + user_id).get()

    return {'user_type': user_type, 'user_details': user_details}
