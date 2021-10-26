const mongoose = require('mongoose')


        const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/myrecipes';
        console.log(`connecting to ${url}`);
        mongoose.connect(url)

