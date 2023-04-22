# Node.js Application with Express and MongoDB

This is a Node.js application that uses the Express framework and MongoDB database to fetch and display data in a table format. The frontend of the application is developed using React

## Setup

To run this application, you need to follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Install the required dependencies by running `npm install` in the backend and frontend directory of the project.
3. add .env file in the both frontend and backend


## Backend

The backend is built using Node.js and Express framework. MongoDB database is used as a data store, and Mongoose is used as to connect to the database. 

### Installation

To install the backend dependencies, run the following command in the `backend` directory:

```
npm install
```

### Running the server

To start the server, run the following command:

```
npm start
```

The server will start on port 8080 by default. You can change this by setting the `PORT` environment variable. it will also take `MONGO_URL` for connecting into database

## Frontend

The frontend is built using React and styled using CSS Modules. The frontend displays the data returned from the backend API in a table format.
`Select Tag is there to Select specific query`

### Installation

To install the frontend dependencies, run the following command in the `frontend` directory:

```
npm install
```
in .env of frontend add ``REACT_APP_BASE_URL`` which is the url of backend

### Backend API Endpoints

There are 5 API endpoints in the backend for fetching data based on different conditions:

1. `/users/query1` - Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. `/users/query2` - Male Users which have phone price greater than 10,000.
3. `/users/query3` - Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. `/users/query4` - Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. `/users/query5` - Show the data of top 10 cities which have the highest number of users and their average income.

All of these endpoints return JSON data.


## Styling

The table in the frontend is styled using CSS modules. You can find the styles in the `styles.module.css` file.

