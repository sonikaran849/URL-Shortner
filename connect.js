const mongoose = require("mongoose");

async function connectDB(url){
    mongoose.connect(url).then(()=> { console.log("Database Connected!") });
}

module.exports = {
    connectDB,
};