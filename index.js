const express = require("express");
const app = express();
const PORT = 8001;
const urlRoute = require("./routes/url");
const url = "mongodb://127.0.0.1:27017/url-shortner";
const {connectDB } = require("./connect");


connectDB(url);

app.use("/url", urlRoute);

app.listen(PORT, ()=>{
    console.log("Server Started");
})