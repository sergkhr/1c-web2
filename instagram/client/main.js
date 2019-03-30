let Vue = require("vue");
let VueResource = require("vue-resource");
let VueRouter = require("vue-router");

let App = require("./components/app.vue");
let Register = require("./components/register.vue");

Vue.use(VueResource);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: "/register", components: Register }
    ]
});

let vm = new Vue({
    el: "#root",
    router: router,
    render: function(createElement){
        return createElement(App);
    }
})