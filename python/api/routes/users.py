from flask import Flask, request
from flask import Blueprint
from firebase_admin import db
from .models.users_model import Users
from firebase_admin import storage

bp = Blueprint('users', __name__, url_prefix='/users')


@bp.route('/new', methods=['POST'])
def new_user():
    data = request.get_json()['user']
    user = Users(**data)
    db_reference = "users/" + user.user_id
    db.reference(db_reference).set(user.__dict__)
    return 'Success'
