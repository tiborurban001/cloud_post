<template>
    <div class="signup-pg">
          <header>
        <h3><span>Post</span>Cloud</h3>
        <h4>Register</h4>
        </header>
        <main class="form-group">
            <input type="text" v-model="firstname" placeholder="First Name">
            <input type="text" v-model="lastname" placeholder="Last Name">
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button class="login-btn" @click="register">Register</button>
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
            password: ""
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
            console.log(response)
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
.signup-pg{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;

    .form-group{
        flex: 1;
        display:flex;
        justify-content: flex-start;
        flex-flow: column;
        padding: 28px;

       input{
           outline: none;
            width: 100%;
            height: 30px;
            border: 1px solid rgb(33, 37, 41);
            margin-bottom: 15px;

           text-indent: 5px;
            background-color:rgb(222, 226, 230) ;

            &:focus{
                border: 1.2px solid rgb(0, 129, 167);
            }
        }
       button{
           outline: none;
           align-self: center;
           width: 50%;
           height: 35px;
           background: rgb(0,119,182);
           background: linear-gradient(0deg, rgba(0,119,182,1) 0%, rgba(0,180,216,1) 100%);
           color: rgb(248, 249, 250);
           appearance: none;
           border:none;
           border-radius: 25px;
           font-weight: 700;
           font-size: 19px;
       }
    }
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

