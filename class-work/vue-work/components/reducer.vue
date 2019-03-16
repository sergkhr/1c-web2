<template>
    <button type="button" v-on:click="reduce">{{ number }}</button>
</template>

<script>
    module.exports = {
        data: function() {
            return { number: 0 };
        },
        methods: {
            reduce: function(){
                this.number -= 1;
            }
        }
    }
</script>