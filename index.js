const express = require("express");
const app = express();

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());

const route = require("./routs/routs");
const { DB_username, DB_password, DB_server, DB_name } = require("./utils/config");
app.use("/users",route);



mongoose.connect(`mongodb+srv://${DB_username}:${DB_password}@cluster0.${DB_server}.mongodb.net/${DB_name}`).then( ()=>{
    console.log(" connected sucsessfully");
    }).catch((e)=>{console.log(e)});


// mongoose.connect(`mongodb+srv://${DB_UserName}:${DB_Password}@cluster0.${DB_Server}.mongodb.net/${DbName}`);



app.listen(1000,()=>{
    console.log("your path is := http://localhost:1000 ");
})