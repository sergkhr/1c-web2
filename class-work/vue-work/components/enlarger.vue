<template>
    <h1 v-on:mousemove="enlarge">{{ number }}</h1>
</template>

<script>
    module.exports = {
        data: function() {
            return { number: 0 };
        },
        methods: {
            enlarge: function(){
                this.number += 1;
            }
        }
    }
</script>