const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const data = await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDatabase;
