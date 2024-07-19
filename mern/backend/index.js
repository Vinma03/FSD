var express=require('express');
var mdb=require('mongoose');
var User=require("./models/userschema");
var cors = require("cors");
var bodyParser = require("body-parser");
var app=express();
var allowedOrigin = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["POST"],
  })
);
app.use(bodyParser.json());
mdb.connect("mongodb+srv://cherpanath2105023:Vinma03@cluster0.xc2xzn0.mongodb.net/Vinma");
var db=mdb.connection;
db.once("open",()=>console.log("MongoDB connection succesful"));
app.get("/",(request,response)=>{
    response.send("Hi Welcome backend");
});
app.get("/login",async(req,res)=>{
    var {email,password} = req.body;
  const existingUser = await User.findOne({email:email})
  console.log(existingUser);
    if(existingUser){
        if(password === existingUser.password){
            return res.json({loggedIn:true,message:"Login Successful"})
        }
        else{
            return res.json({loggedIn:false,message:"Invalid Credentials"})
        }
    }
    else{
        return res.json({loggedIn:false,message:"User Not Found"})
    }
});

app.post("/signup", (req, res) => {
  //console.log(req.body);
  //console.log(username,name,email,password);
  try {
    var { username, name, email, password } = req.body;
    const newUser = new User({
      username: username,
      name: name,
      email: email,
      password: password,
    });
    newUser.save().then(() => {
      console.log({ message: "User Added" });
    });
    return res.json({ message: "User Added" });
  } catch (error) {
    return res.json({ message: "User not Added" });
  }
});

app.listen(3001, () => console.log("Backend Started"));
//     response.json({"message":"this is home page"})
// });
// const newUser=new User({
//     username:"Vinma",
//     name:"Vin",
//     email:"cd@gmail.com",
//     password:"vinma03",
// });
// try{
//     newUser.save()
// console.log("user added  sucessfully")
// }
// catch(e){
//     console.log("User  not added")
// }
// app.listen(3001,()=>console.log("Backend Started"))
