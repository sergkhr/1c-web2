<template>
    <div class="page">
        <div class="focus">
            <form class="focus_holder" v-on:keydown.enter="register">
                <input type="text" class="form-control" placeholder="Логин" v-model="username">
                <input type="password" class="form-control" placeholder="Пароль" v-model="passwordA">
                <input type="password" class="form-control" placeholder=" Повтор пароля" v-model="passwordB">
                <button type="button" class="btn btn-danger btn-block" v-on:click="register">Зарегистрироваться!</button>
                <router-link to="/login">Войти!</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    module.exports ={
        data: function() {
            return {
                username: "",
                passwordA: "",
                passwordB: ""
            }
        },
        methods: {
            register: function() {
                if(this.passwordA === this.passwordB){
                    let promise = this.$auth.register(this.username, this.passwordA);
                    promise.then(function() {
                        console.log("пользователь точно зарегистрирован");
                        this.$router.push("/login");
                    });
                    promise.catch(function(error) {
                        alert("Ошибка: " +  error);
                    });
                }
            }
        }
    }
</script>
