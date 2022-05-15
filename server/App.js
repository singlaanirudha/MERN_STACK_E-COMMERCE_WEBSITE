const cookieParser = require('cookie-parser');
const express=require('express');  
// const cors=require('cors');  

const app=express();
app.use(cookieParser());


const { Console } = require("console");

const dotenv=require("dotenv");
dotenv.config({path:'./database.env'})  //database link in ".env" file
 

// app.use(cors());

app.use(express.json());    //1
app.use(require('./router/auth.js'));       //2
app.use('./images', express.static('images'));


const PORT=process.env.PORT;    //calling the port and port number from ".env" file
app.listen(PORT,()=>
{
    console.log(`App.js, the server will run on port number - ${PORT}`);
});
