let express = require("express");
let app = express();
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost/registred"'
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false});

app.post("/enroll", urlencodedParser, function(request, responce){
    responce.redirect("records.html");
});

app.use(express.static("/client"));


app.listen(591);