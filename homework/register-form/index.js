let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false});

app.post("/enroll", urlencodedParser, function(request, responce){
    app.use(express.static("D:\Sergey Khrechko\web-2\1c-web2\homework\register-form\records\records.html"));
    responce.redirect("D:\Sergey Khrechko\web-2\1c-web2\homework\register-form\records\records.html");
});

app.use(express.static("/client/index.html"));


app.listen(591);