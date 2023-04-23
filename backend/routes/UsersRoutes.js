const usersRouter = require("express").Router();
const { UserModel } = require("../models/UserModel");

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
usersRouter.get("/query1", async (req, res) => {
    try {
        const users = await UserModel.find({
            $and: [
                { car: { $in: ["BMW", "Mercedes-Benz"] } },
                { $expr: { $lt: [{ $toDouble: { $substr: ["$income", 1, -1] } }, 5] } }]
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Male Users which have phone price greater than 10,000.
usersRouter.get("/query2", async (req, res) => {
    try {
        const users = await UserModel.find({
            $and: [
                { gender: "Male" },
                { $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] } }]
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
usersRouter.get("/query3", async (req, res) => {
    try {
        const users = await UserModel.aggregate([{
            $match: {
                $and: [
                    { last_name: { $regex: /^M/i } },
                    { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
                    {
                        $expr: {
                            $ne: [{
                                $indexOfCP: [
                                    { $toLower: "$email" },
                                    { $toLower: "$last_name" }
                                ]
                            }, -1]
                        }
                    }
                ]
            }
        }])
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
usersRouter.get("/query4", async (req, res) => {
    try {
        const users = await UserModel.find({
            $and: [
                { car: { $in: ["BMW", "Mercedes-Benz", "Audi"] } },
                { email: { $not: { $regex: /\d/ } } }]
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//5. Show the data of top 10 cities which have the highest number of users and their average income.
usersRouter.get("/query5", async (req, res) => {
    try {
        const users = await UserModel.aggregate([
            { $group: { _id: "$city", usersCount: { $sum: 1 }, totalIncome: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } } } },
            { $sort: { usersCount: -1 } },
            { $project: { city: "$_id", users_count:"$usersCount", average_income: { $divide: ["$totalIncome", "$usersCount"] } } },
            { $limit: 10 },
        ]);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

module.exports = {
    usersRouter
}
