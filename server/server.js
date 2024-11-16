const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/database");

// Load environment variables from config file
dotenv.config({
    path: path.join(__dirname, "./config/config.env"),
});

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined in env file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
