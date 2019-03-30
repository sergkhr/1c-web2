// npm install --global browserify
// npm install --global watchify
// npm install vue@2.5.16 --save-exact
// npm install babel-core@6.26.3 babel-preset-es2015@6.24.1 babel-runtime@6.26.0 babel-plugin-transform-runtime@6.23.0 vue-template-compiler@2.5.16 vueify@9.4.1 --save-exact
// npm install vue-router@3.0.1 vue-jwt-mongo@latest vue-resource@1.5.1  --save-exact
// watchify main.js --outfile bundle.js --transform vueify --verbose  эта и следующая это в package.json watch и  build  это запуск для bundle.js
// browserify main.js --outfile bundle.js --transform vueify --verbose   
// команды для консоли

let express = require("express");

let app = express();
app.use(express.static("../client"));

app.listen(80);