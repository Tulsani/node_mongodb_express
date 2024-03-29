const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const currency = mongoose.Types.Currency;

const commentSchemma = new Schema({
    rating:{
       type : Number,
       min:1,
       max:5,
       required:true 
    },
    comment : {
        type : String,
        required:true
    },
    author :{
        type : String,
        required: true
    }},{
        timestamps:true
});

const dishSchema = new Schema({
name : {
    type : String,
    required : true ,
    unique : true
},
description : {
    type : String,
    required : true 

},image:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
label:{
    type:String,
    default:''
},
price : {
    type : currency,
    min : 0,
    required:true
},
featured:{
    type:Boolean,
    default:true
},
comments : [commentSchemma]
},{
    timestamps : true  
});

var Dishes  = mongoose.model('Dish',dishSchema);
module.exports = Dishes;