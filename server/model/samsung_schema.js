// SAMSUNG PRODUCTS ADMIN SCHEMA

const mongoose=require('mongoose');


const samsung_schema= new mongoose.Schema({

    product_img:
    {
        type:String,
        required:true
    },

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

const Samsung_product_list= mongoose.model('SAMSUNGPRODUCTLIST', samsung_schema);
module.exports=Samsung_product_list;