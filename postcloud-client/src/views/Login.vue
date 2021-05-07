<template>
    <div class="login-pg">
        <header>
        <h3><span>Post</span>Cloud</h3>
        <h4>Sign in</h4>
        </header>
        <main class="form-group">
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button class="login-btn" @click="login">Log in</button>
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
            password: ''
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
            localStorage.setItem('jwt', response.data.token)
            this.$router.push('/')
            } else{
                console.log("Error:", response.data.msg)
            }
        }).catch(err => {
            console.log(err)
        })


            }
        }
}
</script>

<style lang="scss" scoped>
//header
header {
    padding: 20px 25px;
    h3{
        color: rgb(33, 37, 41);
        font-size: 30px;
        font-weight: 900;
        text-align: center;
    }
    span{

        font-weight: 400;
    }

    h4{
        color: rgb(188, 202, 206);
        text-align:  center;
        font-size: 24px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
}

//Main
.login-pg{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;

    //Footer
    footer
        {
            border-top:1px solid rgb(33, 37, 41);
            padding:15px 25px;
           width: calc(100% - 50px);
           height: 45px;
        
        p{
            line-height: 10px;
            color: #8888;
            text-align: center;
            
        }
        .link{
            color: rgb(34,35,25);
            font-weight: 600;
            font-size: 19px;
            text-decoration: none;
            
        }
        

       }
}



</style>