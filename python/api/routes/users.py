from flask import Flask, request
from flask import Blueprint
from firebase_admin import db


bp = Blueprint('users',__name__,url_prefix='/users')


@bp.route('/new', methods=['GET'])
def hi():
    args = request.args
    user_id = args.get("user_id")
    db_reference = "users/" + user_id + "/user_type"
    try:
        return db.reference(db_reference).get()
    except db.exceptions:
        return 'fail', 500