from flask import Blueprint
from firebase_admin import db

bp = Blueprint('users',__name___, '/users')


@bp.route('/users')
def hi():
    try:
        return db.reference('users').get()
    except db.exceptions:
        return 'fail', 500