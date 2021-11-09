## Tipster
Tipster is a PWA for artists that enables them to start receiving tips from their fans. It lets artists sign up/login, connect to Stripe in order to receive payments, and generate a QR code.

On the fan side, users can scan the artist's QR code to send them tips and personalized notes, which will then appear on the artist's dashboard.

The app was engineered and designed by myself in a week.

## Artist flow

<img src="./screenshots/Artist 1@2x.png" width="300" ><img src="./screenshots/Artist 2@2x.png" width="300" ><img src="./screenshots/Artist 3@2x.png" width="300" >

## Fan flow

<img src="./screenshots/Fan 1@2x.png" width="300" ><img src="./screenshots/Fan 2@2x.png" width="300" ><img src="./screenshots/Fan 3@2x.png" width="300" >

## Tech Stack

:office: [React](https://reactjs.org/) <br>
:office: [Sripe](https://stripe.com/en-gb-de) <br>
:office: [Express](https://expressjs.com/)  <br>
:office: [PostgreSQL](https://www.postgresql.org/)  <br>
:office: [Sequelize](https://sequelize.org/) <br>
:office: [Figma](https://www.figma.com/)  <br>


## Running Tipster
- Fork & clone this repo
- npm i to install necessary dependencies
- Make sure you have postgreSQL installed on your machine mac || windows
- Run npx nodemon to start the server
- Adjust the necessary env variables to match your system. Edit your database credentials in Tipster/server/models/model.js. 
- Generate your own private [Stripe API key](https://stripe.com/en-gb-de "Stripe API key").
- Lastly in your CLI run npm run start to start the front-end.
