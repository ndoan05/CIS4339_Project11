# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup

    npm install

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG

    MONGO_URL= that is the Mongo URL connection string
    PORT= e.g.3000
    ORG= that is the orgid (as a string)

The .env file for Team 11 should look like this:

    MONGO_URL="mongodb+srv://cis4339Team11:JOjpaGc3taauPgs3@cis-4339.o7fv87y.mongodb.net/team11?retryWrites=true&w=majority"
    PORT=3000
    ORG="6445fe7b67655359d93a6333"

### Compiles and hot-reloads for development

    npm start

## Postman Documentation

Can be found at <https://documenter.getpostman.com/view/23133138/2s83mdJiqh>
