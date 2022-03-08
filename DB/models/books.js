const mongoose =require("mongoose")
const bookmodel = new mongoose.Schema({
title: { type: String, required: true },
pages: { type: Number , required: true},
price:{ type: Number,default :0},
img: { type: String },
}
)
module.exports =mongoose.model('book',bookmodel)