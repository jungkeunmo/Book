import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Book = new Schema({

    title: {
        type : String,
        required: true,
    },
    price: {
        type : Number,
        required: true,
    }
},
{versionKey: false});

export default mongoose.model(`Book`, Book,`Book`);