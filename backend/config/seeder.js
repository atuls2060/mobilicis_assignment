const { UserModel } = require("../models/UserModel");
const usersData = require("./sample_data.json");

const seedData = async () => {
    try {
        // Check if data already exists
        const count = await UserModel.count();
        console.log("documents count", count)
        if (count > 0) {
            console.log('Data already exists. Skipping seed.');
            return;
        }

        // Seed data
        await UserModel.insertMany(usersData);
        console.log('Data seeded successfully!');
    } catch (error) {
        console.error('Error seeding data:', error.message);
    }
}

module.exports = seedData;
