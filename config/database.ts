import mongoose from 'mongoose'

class Connection{

    constructor(){
        const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/myrecipes';
        console.log(`connecting to ${url}`);
        mongoose.connect(url)
    }
}

export default new Connection();