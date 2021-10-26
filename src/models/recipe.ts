import { Schema } from "mongoose";

class Recipe{

    initSchema(){
        const schema = new Schema({
            title: { type: String, required: true },
            description: { type: String, required: true },
            portion: { type: Number, default: 1 },
            instructions: { type: String, required: true },
            ingredients: [{
                ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient' }
            }]
        })
    }

}