<style scoped>
    h1 {
        color:blue
    }
</style>

<template>
    <h1>{{ message }}</h1>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                message: "Hello, component!"
            }
        }
    };
</script>