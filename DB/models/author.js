const mongoose =require("mongoose")
const authormodel = new mongoose.Schema({
name: { type: String, required: true },
age: { type: String},
nationality: { type: String, required: true },
img: { type: String },
gender: { type: String },
books :{type: mongoose.Schema.Types.ObjectId , ref: "book"}
},
{timestamps: true}

)
module.exports =mongoose.model('author',authormodel)