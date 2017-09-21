# express-redux-mongoose

The goal for this project is to serve as a boilerplate that puts together the following client side and server side stack:
  1. node.js [express]
  2. mongodb [mongoose]
  3. react [redux]


## Features that are included:
  - using passport for oauth2 for google/facebook
  - be ready to get deployed to heroku
  - using create-react-app [via create-redux-app] for client side without ejection
  - using jest and enzyme for testing
  - using concurrently to run the two servers by one shot in development


## How to use?
After cloning the repository on your local machine, to install the client and the server side dependencies run:
```
npm install && npm install --prefix client
```


In config folder add `dev.js` file and fill out the appropriate information. Take a peek at `DevJsExample.js` file in the same folder


Then you can run both the client side and server side servers by running:
```
npm run dev
```
The client server will be running on `localhost:3000` and the server side server will be reachable via `localhost:5000`


## License:
MIT
