const express = require("express");
const app = express();
const PORT = 8001;
const urlRoute = require("./routes/url");
const url = "mongodb://127.0.0.1:27017/url-shortner";
const {connectDB } = require("./connect");
const URL = require("./models/url");

app.use(express.json());


connectDB(url);

app.use("/url", urlRoute);

app.get("/:shortId", async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId},
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now(),
                }
            }
        }
    );

    res.redirect(entry.redirectURL)
});

app.listen(PORT, ()=>{
    console.log("Server Started");
})