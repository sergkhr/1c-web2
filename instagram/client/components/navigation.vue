<template>
    <div>
        <div class="navbar navbar-expand sticky-top navbar-dark bg-success">
            <router-link class="navbar-brand text-light" to="feed">
                Фотолента
            </router-link>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="upload">
                        Загрузить
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" v-on:click="logOut">
                        Выйти
                    </a>
            </li>
        </ul>
        </div>
        <div class="navbar navbar-expand fixed-bottom navbar-dark bg-success">
            
        </div>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logOut: function() {
                this.$auth.logOut();
                this.$router.push("/");
            }
        }
    }
</script>