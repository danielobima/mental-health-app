# mental-health-app

A hackathon project for mental health.

**Installation (front-end)**

1. Make sure you have node.js and npm installed on your computer
2. Clone the project from github [https://github.com/danielobima/mental-health-app](https://github.com/danielobima/mental-health-app)
3. Navigate to the front-end folder inside the project using command prompt or a terminal
4. Run the following command to install the project’s dependencies `npm install`
5. Create a file called .env in the directory
6. Create a firebase account and a new project and register your app. For reference follow step 1 [https://firebase.google.com/docs/web/setup?authuser=0&hl=en](https://firebase.google.com/docs/web/setup?authuser=0&hl=en)
7. Initiate a realtime database, storage bucket and authentication with email and password. For reference, Setting up the database [https://firebase.google.com/docs/database/web/start?hl=en&authuser=0](https://firebase.google.com/docs/database/web/start?hl=en&authuser=0), Setting up the storage bucket [https://firebase.google.com/docs/storage/web/start?hl=en&authuser=0](https://firebase.google.com/docs/storage/web/start?hl=en&authuser=0), Setting up authentication https://firebase.google.com/docs/auth/web/password-auth?authuser=0
8. Obtain a config object [https://firebase.google.com/docs/web/learn-more?authuser=0#config-object](https://firebase.google.com/docs/web/learn-more?authuser=0#config-object)
9. In the .env file paste your config object properties like so

   ```
   REACT_APP_FB_API_KEY="Your key"
   REACT_APP_FB_AUTH_DOMAIN="Your auth domain"
   REACT_APP_FB_DATABASE_URL="your database url"
   REACT_APP_FB_PROJECT_ID="your project ID"
   REACT_APP_FB_STORAGE_BUCKET="your storage bucket"
   REACT_APP_FB_MESSAGING_SENDER_ID="your messaging sender ID"
   REACT_APP_FB_APP_ID="your app ID"
   ```

10. To start the website, run `npm start`

**Installation (back-end)**

1. Make sure you have python and pip installed on your computer
2. Navigate to the back end folder using command prompt or a terminal
3. Create a virtual environment using `python -m venv venv`
4. Activate the virtual environment using `venv\Scripts\activate`
5. Install the project dependencies using `pip install -r requirements.txt`
6. Create a .env file in the directory
7. Generate your firebase service account key. For reference https://firebase.google.com/docs/admin/setup?authuser=0&hl=en#initialize-sdk
8. Convert the json file into a string. You can use this tool [https://jsonformatter.org/json-stringify-online](https://jsonformatter.org/json-stringify-online)
9. Paste the service account string you generated into the .env file. Paste your database url into the .env file

   ```
   FB_PRIVATE_KEY="Your service account key"
   FB_DATABASE_URL=Your database url
   ```

10. Run the server using `flask --debug run` (debug mode), or `flask run`
