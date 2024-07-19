var mdb=require('mongoose')

const userschema=mdb.Schema(
    {
        username:String,
        name:String,
        email:{type:String,unique:true},
        password:String,
    }
);
const user_schema=mdb.model("users",userschema);
module.exports=user_schema;