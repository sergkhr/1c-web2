let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let app = express();

app.use(cors());



app.get("/",function(request, response) {
    let name = request.query.name;
    let mood = request.query.mood;
    response.send("Hello, " + name + "! I am " + mood + " too.");
});

function performActions(collection, data, query) {
    console.log("insertin...");
    collection.insert(data, function(){
        console.log("inserted!");
    });
    console.log("deleting...");
    collection.deleteMany(query);
}

mongoClient.connect("mongodb://localhost", function(err, client) {
    console.log(err);
    let sandbox = client.db("sandbox");
    let humans = sandbox.collection("humans");

    app.listen(591);
});

