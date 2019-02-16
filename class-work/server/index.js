let express = require("express");
let cors = require("cors");
let app = express();
let fs = require("fs");
let citats  = [];

app.use(cors());

app.get("/quote", function(request, responce){
    fs.readFile("database.txt", "utf-8", function(err, content) {
        content = content.trim();
        citats = content.split("\n");
        let r = Math.floor(Math.random() * citats.length);
        responce.send(citats[r]);
    });
});
app.listen(591);


