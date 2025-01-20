const { error } = require("console");
const {nanoid } = require("nanoid")
const URLS = require("../models/url");

async function generateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"});
    const shortID = nanoid(8);
    await URLS.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({id : shortID});
};

module.exports = {
    generateShortUrl,
}