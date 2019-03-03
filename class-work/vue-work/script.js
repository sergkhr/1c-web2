let $ = require("jquery");

$("#button").on("click", function(){
    alert("bla");
});

let dependency = require("./dependency.js");

dependency.act();

let Vue = require("vue");
let App = require("./app.vue");
let vm = new Vue({
    el: "#root",
    render: function(createElement){
        return createElement(App);
    }
});


let vn = new Vue({
    el: "#app", // связан  именно div с id  app
    data: {





        thing: "",
        list: ["сделать д/з"],
        visible1: true,
        visible2: true,
        visible: true,

        items: [
            { text: "hey"},
            {text: "how are you?"},
            { text: "rat"}
        ],
        chislo: 0,
        changesCount: 0,
        numbers: [],
        p: 5,
        number: 1,
        n: 1,
        checked: true,
        message: "уругвай и парагвай",
        query: "Javascript",
        blue: false,
        underlined: false,
        sizeFactor: "1"
    },

    methods: {
        double: function(event) {
            this.number *= 2;
        },
        half: function(event) {
            this.number /= 2;
        },
        addItem: function(event) {
            // проверка не нужна т.к. написано v-on:keydown.enter значит будет срабатывать только при нажатии на enter
            this.list.push(this.thing);
            this.thing = "";
            
        },
        removeItem: function(index) {
            this.list.splice(index,1);
        },
        increase: function() {
            this.chislo +=1;
        },
        decrease: function() {
            this.chislo -=1;
        }
    },
    
    computed: { // вычисление на основе data
        average: function(){
            let sum = 0;
            let n = this.numbers.length;
            this.numbers.forEach(function(x){
                sum += Number(x); // Number превращает строку в число
            });
            return sum / n;
        }
    }
});

vn.$watch("chislo", function(newValue) { // слежение за переменной chislo
    this.changesCount += 1; 
});