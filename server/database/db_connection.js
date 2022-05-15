const mongo=require('mongoose');

const Db=process.env.DATABASE;      //connecting via mongo link


mongo.connect(Db,{   
    useNewUrlParser:true
    // useUnifiedTopology: true;
}

).then(()=>
    {
        console.log("Mongodb Database Connection Sucessful");
    }).catch((err)=>console.log(err));