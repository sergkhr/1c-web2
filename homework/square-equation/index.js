let vm = new Vue({
    el:"#app",
    data:{
        a: 1,
        b: 0,
        c: 0
    },
    computed: {
        diskr: function(){
            return this.b * this.b - 4 * this.a * this.c;
        },
        x1: function(){
            if(this.diskr > 0 && this.a != 0){
                return (-this.b + Math.sqrt(this.diskr)) / (2 * this.a);
            }
        },
        x2: function(){
            if(this.diskr > 0 && this.a != 0){
                return (-this.b - Math.sqrt(this.diskr)) / (2 * this.a);
            }
        },
        x: function(){
            if(this.diskr == 0 && this.a != 0) {
                return (-this.b) / (2 * this.a);
            }else if(this.a == 0){
                return (-this.c) / (this.b);
            }
        }
        
        
    }
});
functionPlot ({
    target: "#plot",
    data: [{
        fn: "(" + vm.a + ")x^2 + (" + vm.b + ") * x + (" + vm.c + ")"
    }],
    grid: true
});
vm.$watch("b", function(){
    functionPlot ({
        target: "#plot",
        data: [{
            fn: "(" + vm.a + ")x^2 + (" + vm.b + ") * x + (" + vm.c + ")"
        }],
        grid: true
    });
});
vm.$watch("a", function(){
    functionPlot ({
        target: "#plot",
        data: [{
            fn: "(" + vm.a + ")x^2 + (" + vm.b + ") * x + (" + vm.c + ")"
        }],
        grid: true
    });
});
vm.$watch("c", function(){
    functionPlot ({
        target: "#plot",
        data: [{
            fn: "(" + vm.a + ")x^2 + (" + vm.b + ") * x + (" + vm.c + ")"
        }],
        grid: true
    });
});
