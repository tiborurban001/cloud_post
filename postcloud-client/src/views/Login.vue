<template>
    <div>
        <h3>PostCloud</h3>
        <div class="form-group">
            <input type="text" v-model="email">
            <input type="password" v-model="password">
            <button class="login-btn">Log in</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>