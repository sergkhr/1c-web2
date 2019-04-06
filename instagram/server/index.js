// npm install --global browserify
// npm install --global watchify
// npm install vue@2.5.16 --save-exact
// npm install babel-core@6.26.3 babel-preset-es2015@6.24.1 babel-runtime@6.26.0 babel-plugin-transform-runtime@6.23.0 vue-template-compiler@2.5.16 vueify@9.4.1 --save-exact
// npm install vue-router@3.0.1 vue-jwt-mongo@latest vue-resource@1.5.1  --save-exact
// watchify main.js --outfile bundle.js --transform vueify --verbose  эта и следующая это в package.json watch и  build  это запуск для bundle.js
// browserify main.js --outfile bundle.js --transform vueify --verbose
// npm install --save-exact vue-jwt-mongo@1.3.6   
// команды для консоли

let express = require("express");
let vjm = require("vue-jwt-mongo");

let SECRET ="94A5488853AE7B31207FDD555D65A3DAE58F23963D6633DFFEA6C3E627B0BA07";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server ({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: SECRET
});

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

app.listen(80);