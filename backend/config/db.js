const mongoose = require("mongoose");
const seedData = require("./seeder")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');
        //add sample data to db if the data does not exists
        await seedData()

    } catch (error) {
        console.error(error.message);
    }
};

module.exports = connectDB;
