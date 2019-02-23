let vm = new Vue({
    el: "#app", // связан  именно div с id  app
    data: {
        items: [
            { text: "hey"},
            {text: "how are you?"},
            { text: "rat"}
        ],
        p: 5,

        n: 1,
        checked: true,
        message: "уругвай и парагвай",
        query: "Javascript",
        blue: false,
        underlined: false,
        sizeFactor: "1"
    }
});