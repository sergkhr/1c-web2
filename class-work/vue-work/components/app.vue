<template>
    <div>
        <router-link to="/add">добавить</router-link>
        <router-link to="/substract">вычесть</router-link>
        <div><router-view></router-view></div> 
    </div>
</template>

<script>
    module.exports = {
        components: {
        }
    }
</script>