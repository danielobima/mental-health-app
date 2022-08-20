import json
import os
from flask import Flask
import firebase_admin
from firebase_admin import credentials
from .routes import *
from flask_cors import CORS


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
    cred = credentials.Certificate(json.loads(os.environ.get('FB_PRIVATE_KEY')))
    firebase_admin.initialize_app(cred, {
        'databaseURL': os.environ.get('FB_DATABASE_URL')
    })

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    app.register_blueprint(hello.bp)
    app.register_blueprint(users.bp)
    app.register_blueprint(session.bp)



    return app
