const express = require("express");
const app = express();
const port = 8080;
const Openai = require("openai");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
//initiate AI

const openai = new Openai({
    apiKey:process.env.OPENAI_API_KEY
})



app.post("/openai-chat", async (req,res) => {
    console.log(req.body.message)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: req.body.message}],
        model: "gpt-4",
    });
    res.send(chatCompletion.choices[0].message.content)
})


app.listen(port, ()=> {
    console.log("connected to port 8080")
})