from flask import Blueprint
from firebase_admin import db

bp = Blueprint('hello', __name__, '/hello')


<<<<<<< HEAD

=======
#http://127.0.0.1:5000/hello
>>>>>>> b318a73c5b777f1ebb74710747e5b101854b9e1b

@bp.route('/hello')
def hi():
    try:
        return db.reference('hello').get()
    except db.exceptions:
        return 'fail', 500
