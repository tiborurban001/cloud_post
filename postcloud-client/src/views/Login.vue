<template>
    <div class="login-pg">
        <header>
        <h3><span>Post</span>Cloud</h3>
        <h4>Sign in</h4>
        </header>
        <main class="form-group">
            <input type="text" v-model="email" placeholder="Email" :class="(emailError) ? 'err' : ''">
            <input type="password" v-model="password" placeholder="Password" :class="(passwordError) ? 'err' : ''">
            <button class="login-btn" @click="login">Log in</button>
            <div class="error_msg" v-if="hasErrors">
                {{error}}
            </div>
        </main>
        <footer>
            <p>
                Don't have an Account?? <router-link class="link" to="/signup">Sign Up!</router-link>.
            </p>
            
            
        </footer>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: '',
            hasErrors: false,
            emailError: false,
            passwordError: false,
            error: ""
        }
    },
    methods: {
        login (){

            let api_url = this.$store.state.api_url
            if(this.email == '' || this.password == ''){
                return alert('Please fill in your Email and Password')
            }
        
        this.$http.post(api_url + 'user/login', {
            email: this.email,
            password: this.password
        }).then(response => {
            if(response.data.auth){
            this.$store.commit('login',response.data.token)
            } else{

                if(response.data.mailError){
                    this.emailError = true;
                    this.passwordError = true;
                }else{
                    this.emailError = false;
                    
                }

                if(response.data.passError){
                    this.passwordError = true;
                    this.emailError = true;
                }else{
                   this.passwordError = false;
                }

                this.hasErrors = true
                this.error = response.data.msg
                
            }
        }).catch(err => {
            console.log(err)
        })


            }
        }
}
</script>

<style lang="scss" scoped>

</style>