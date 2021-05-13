<template>
    <div class="signup-pg">
          <header>
        <h3><span>Post</span>Cloud</h3>
        <h4>Register</h4>
        </header>
        <main class="form-group">
            <input type="text" v-model="firstname" placeholder="First Name">
            <input type="text" v-model="lastname" placeholder="Last Name">
            <input type="text" v-model="email" placeholder="Email" :class="(hasErrors) ? 'err' : ''">
            <input type="password" v-model="password" placeholder="Password">
            <button class="login-btn" @click="register">Register</button>
            <div class="error_msg" v-if="hasErrors">
                {{error}}
            </div>
        </main>
        <footer>
            <p>
                Already registered?? <router-link class="link" to="/login">Login!</router-link>.
            </p>
            
            
        </footer>
    </div>
</template>

<script>
export default {
    name: 'signup',
    data(){
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            hasErrors: false,
            error: ""
        }
    },
    methods: {
        register () {
            let api_url = this.$store.state.api_url
            if(this.email == '' || this.password == '' || this.firstname == '' || this.lastname == '')
            {
                return alert('Please fill all fields')
            }

            this.$http.post(api_url + 'user/register', {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
        }).then(response => {
            if(response.data.auth){
                localStorage.setItem('jwt', response.data.token)
                this.$router.push('/')
            }else{
                this.error = response.data.msg
                this.hasErrors = true
            }
        }).catch(err => {
            this.hasErrors = true
            this.error = err
        })
        }
    }
}

</script>

<style lang="scss" scoped>
//header

//Main


</style>

