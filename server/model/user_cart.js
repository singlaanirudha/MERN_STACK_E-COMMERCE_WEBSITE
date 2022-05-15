// CART SCHEMA

const mongoose=require('mongoose');


const usercart_schema= new mongoose.Schema({

    product_name:
    {
        type:String,
        required:true
    },

    product_mrp:
    {
        type:String,
        required:true
    },

    product_price:
    {
        type:String,
        required:true
    },

    product_date:
    {
        type:String,
        required:true
    }
})

const Cart= mongoose.model('USERCART', usercart_schema);
module.exports = Cart;