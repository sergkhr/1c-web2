let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

app.get("/", function(request, response){
    let x = request.query.text.length;
    response.send(JSON.stringify(x));
});

app.listen(591);