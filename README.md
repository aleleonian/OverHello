# OverHello-frontend

This is a silly app that I codes when I was laid off and had nothing to do.

### What is it about

The app represents a complicated way to say Hello <YOUR_NAME>.
When you input your name, this is what will happen:
* The app will scrape data about your name from behindthename.com and will display it to you.
* If there's enough information, the app will:
    * Create a google drive spreadsheet with international equivalents of your name
    * Take a snapshot (a picture) of this spreadsheet to show it to you.
* Then the app will translate your name to morse code and will create a little video on the fly showing how your name spells in morse
* Finally the app will get in touch with a Twitter Bot (that I also coded) which runs in a Docker container (Just to make things more complicated) that does NOT use the Twitter API and will tweet a random hello to you.
* The app will also generate a QR code that links to the aforementioned tweet.
* That's it.

## Code
This app was built in React and uploaded to Heroku. The backend was written in Node.js / Express and MongoDB. The Twitter Bot was written in Node.js and Docker.

You can use it live at:

https://overhello-frontend-0d0f00dd7856.herokuapp.com/

### Source:

* https://github.com/aleleonian/OverHello-frontend
* https://github.com/aleleonian/OverHello-backend
* https://github.com/aleleonian/OverHello-xBot

## Environment Variables

You must set one env var, otherwise the app won't run properly.
### `REACT_APP_BACKEND_SERVER` 
must be set and pointing to the backend for this frontend app.



