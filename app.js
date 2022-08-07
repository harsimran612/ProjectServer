const express = require("express");
const app = express();
const cors = require('cors');

const db = require('./db/connection.js')

app.use(cors());

db
.then(() => {
    
    console.log('Successfully connected to database!!')
    const server = app.listen(8080,()=>console.log("listening"));
})

// Statically serve the public folder here
app.use(express.static("public"));


app.use(express.json({ limit: '25mb' })) 
app.use(express.urlencoded({limit: '25mb', extended:true}));

const router = require("./routes/stories.js")
app.use('/home', router);
