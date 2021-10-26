import { Schema } from "mongoose";

class Ingredient{

    initSchema() {
        const schema = new Schema({
            name: { type: String, required: true },
            descripton: String
        })
    }
}