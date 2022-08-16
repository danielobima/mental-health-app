from flask import Blueprint
from firebase_admin import db

bp = Blueprint('hello', __name__, '')


@bp.route('/')
def hi():
    try:
        db.reference('hello').set('not world')
        return 'Success'
    except db.exceptions:
        return 'fail', 500
