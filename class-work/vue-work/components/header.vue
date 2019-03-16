<style scoped>
    h1 {
        color:blue
    }
</style>

<template>
    <div>
        <h1>{{ username }}</h1>
        <input type="text" v-model="username">
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                message: "Hello, component!"
            }
        },
        props: ["username"]
    };
</script>