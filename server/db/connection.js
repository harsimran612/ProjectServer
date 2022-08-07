const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://harsimran:Registration12@cluster0.ucpkx.mongodb.net/base?retryWrites=true&w=majority`

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose.connection;