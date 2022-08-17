from flask import Blueprint
from firebase_admin import db

bp = Blueprint('hello', __name__, '/hello')




@bp.route('/hello')
def hi():
    try:
        return db.reference('hello').get()
    except db.exceptions:
        return 'fail', 500
