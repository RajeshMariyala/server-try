// const mongoose = require("mongoose");

// const dbURI = 'mongodb+srv://rajeshmariyala3:bGZepseVie3KFOyp@server.0gjzbfm.mongodb.net/?retryWrites=true&w=majority&appName=server';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(dbURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected successfully');
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
