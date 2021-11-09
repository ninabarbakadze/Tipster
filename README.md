# Tipster
Tipster is a PWA for artists enabling them to start receiving tips from their fans. It lets artists sign up/login, connect to stripe in order to receive payments and generate qr code. On the fan side users can scan qr code and send tips/personalized notes to their favorite artists which will appear on Artist's dashboard. The app was engineered and designed by me in a week.

# Artist flow

<img src="./screenshots/Artist 1@2x.png" width="200" >
<img src="./screenshots/Artist 2@2x.png" width="200" >
<img src="./screenshots/Artist 3@2x.png" width="200" >


# Running Tipster
- Fork & clone this repo
- npm i to install necessary dependencies
- Make sure you have postgreSQL installed on your machine mac || windows
- Run npx nodemon to start the server
- Adjust the necessary env variables to match your system. Edit your database credentials in Tipster/server/models/model.js. 
- Generate your own private [Stripe API key](https://stripe.com/en-gb-de "Stripe API key").
- Lastly in your CLI run npm run start to start the front-end.
