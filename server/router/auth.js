const express=require('express');    
const jwt= require('jsonwebtoken');
const Signup = require('../model/user_schema');     //mongodb register schema
const Samsung_shop = require('../model/samsung_schema');     //mongodb SAMSUNG schema
const Cart = require('../model/user_cart');     //mongodb SAMSUNG schema
const router= express.Router(); 
require('../database/db_connection')        //mongodb database connectivity

const bcrypt = require('bcrypt');


const multer = require('multer');
const {v4: uuid} = require('uuid');


const Authenticate = require('../middlewear/authenticate');
const { append } = require('express/lib/response');

// ----------------------------------------------------------------------------

router.post('/register',async(req,res)=>
{

    //store the input from the form(in front end) in a variable as per the "name" given to each input type.
    //and create backend form validations 
    const {email, fname, mobile, pswd, cnfmpswd}=req.body;
    if(!email || !fname || !mobile || !pswd || !cnfmpswd)
    {
        return res.status(422).json({error:"Pls fill all the fields"})
    }
    try
    {
        const userExist= await Signup.findOne({email:email})
        
        if(userExist ){
            return res.status(422).json({error:"Account already exist"});
        }

        else if(pswd!=cnfmpswd){
            return res.status(422).json({error: "Password and confirm password does not match"});
        }

        //if the entry satisfy the validations, we will store the input value in a variable and send that to mongodb
        
        //"mongodb schema name" : "name given in form input type(front end)"
        const signup=new Signup({email:email, username:fname, contactno:mobile, password:pswd, cnmfpswd:cnfmpswd});

        //to get a message when the data is posted on mongodb database 
        const userregister= await signup.save();
        if(userregister)
        {
            res.status(201).json({message:"User Registered"});
        }
        
    }

    catch(err)
    {
        console.log(err);
    }

})

// -------------------------------------------------------------------

router.post('/login', async(req, res)=>
{
    try{
        
    const{email, password}=req.body;
    if(!email || !password)
    {
        return res.status(422).json({error:"Pls fill all the field"})
    }
        const userLogin =await Signup.findOne({email:email});
        console.log(userLogin);

        // we need to d-bcrypt the password for login purpose else the user will not be able to login   
        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if(!isMatch)
            {
                res.json({error:"invalid credentials"})
                console.log("Error While Login");
            }
            else
            {
                const token= await userLogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires:new Date(Date.now()+ 3650000000),
                    httpOnly:true
                });
                res.json({message:"user login successfull"})
            }

        }

        else
        {
            res.json({error:"user sign in successfull"})
        }
    
    }   

    catch(err)
    {
        console.log(err)
    }
})

// -----------------------------------------------

router.get('/abtus', Authenticate, (req, res)=>
{
    console.log("Open Console");
    res.send(req.rootUser);
})

//these two API will work the same (only mentioned for learning purposes)

// ------------------------------------------------------

router.get('/getdata', Authenticate, (req, res)=>
{
    console.log("Open Console");
    res.send(req.rootUser);
})

// ----------------------------------------------------------------------------

router.post('/contact', Authenticate, async(req,res)=>{
    try{
        const{email, username, contactno, msg}= req.body;
        if(!email, !username, !contactno, !msg){
            window.alert("Please fill the form Correctly")
            return res.json({error: "Plx fill the contact form"});
        }
    
        const userContact= await Signup.findOne({_id:req.userID});
        if(userContact){
            const usermessage= await userContact.addMessage(username, email, contactno, msg)
            await userContact.save();
            res.status(201).json({msg:"Message sent"})
        }
    }

    catch(error)
    {
        console.log(error)
    }
})

// -----------------------------------------------------------------------

const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, '../client/public/product_imgs')
    },

    filename: function (req, file, cb)
    {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) =>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(null, false)
    }
}

let upload = multer({storage, fileFilter});

router.route('/samsungatc').post(upload.single('product_img'), (req,res)=>
{

    const product_img = req.file.filename;
    const product_name = req.body.product_name;
    const product_mrp = req.body.product_mrp;
    const product_price = req.body.product_price;
    const product_date = req.body.product_date;

    const samsungproductdata= {product_img, product_name, product_mrp, product_price, product_date}

    const newsamsung= new Samsung_shop(samsungproductdata);
    
    newsamsung.save()
    .then(()=> res.json('product added'))
    .catch(err => res.status(400).json('Error: '+ err))

});

// --------------------------------------------------------------------------------

router.route('/getproduct').get((req, res)=>{
    Samsung_shop.find()
    .then(findproduct=> res.json(findproduct))
})

// ------------------------------------------------------------------------------------

router.post('/cart',async(req,res)=>
{
//  console.log(req.body);
//  res.json({message:req.body});
    const {product_name, product_mrp, product_price, product_date}=req.body;
    if(!product_name || !product_mrp || !product_price || !product_date)
    {
        return res.status(422).json({error:"Pls fill all the fields"})
    }
    try
    {
        //"mongodb schema name" : "name given in form input type(front end)"
        const cartitem=new Cart({product_name, product_mrp, product_price, product_date});

        //to get a message when the data is posted on mongodb database 
        const addedtocart= await cartitem.save();
        if(addedtocart)
        {
            res.status(201).json({message:"Added To Cart"});
        }        
    }
    catch(err)
    {
        console.log(err);
    }

})

// ------------------------------------------------------------------------------------

module.exports =router;