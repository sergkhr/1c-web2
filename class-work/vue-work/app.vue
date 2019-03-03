<template>
    <div>
        <mytag></mytag>
        <mytag></mytag>
    </div>
</template>

<script>
    let Header = require("./header.vue");

    module.exports = {
        components: {
            mytag: Header
        }
    }
</script>