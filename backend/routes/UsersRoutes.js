const usersRouter = require("express").Router();
const { UserModel } = require("../models/UserModel");

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
usersRouter.get("/query1", async (req, res) => {
  
});

// 2. Male Users which have phone price greater than 10,000.
usersRouter.get("/query2", async (req, res) => {
  
});

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
usersRouter.get("/query3", async (req, res) => {
    
});

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
usersRouter.get("/query4", async (req, res) => {
   
});


//5. Show the data of top 10 cities which have the highest number of users and their average income.
usersRouter.get("/query5", async (req, res) => {
  
});

module.exports = {
    usersRouter
}
