// CREATE ACCOUNT SCHEME

const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email:
    {
        type:String,
        required:true
    },

    username:
    {
        type:String,
        required:true
    },

    contactno:
    {
        type:Number,
        required:true
    },

    password:
    {
        type:String,
        required:true
    },

    cnmfpswd:
    {
        type:String,
        required:true
    },

    tokens:[{
        token:{type:String, required:true}
    }],

    message:[{
        email:
        {
            type:String,
            required:true
        },

        username:
        {
            type:String,
            required:true
        },

        contactno:
        {
            type:Number,
            required:true
        },

        msg:
        {
            type:String,
            required:true
        }
    }]
})


userSchema.methods.generateAuthToken= async function()
{
    try{
        let var_token = jwt.sign({_id:this._id},
            process.env.SECRETKEY);
        this.tokens=this.tokens.concat({token:var_token});
        await this.save();
        return var_token;
    }
    catch(err)
    {
        console.log(err)
    }
}

// bcrypt used to secure saved password in database ----------------------------

userSchema.pre('save', async function(next)
{
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cnmfpswd=await bcrypt.hash(this.cnmfpswd,12);
    }
    next()
});

// For Message Authentication -------------------------------------------------

userSchema.methods.addMessage= async function (email, username, contactno, msg)
{
    try{
        this.message= this.message.concat({username, email, contactno, msg});

        await this.save();
        return this.message;
    }
    catch(error)
    {
        console.log(error)
    }
}

// -----------------------------------------------------------------------
const Signup= mongoose.model('SIGNUP', userSchema);
module.exports=Signup;