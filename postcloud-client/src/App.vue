<template>
  <div id="app">  
    <router-view/>
  </div>
</template>


<style lang="scss">
body{
 
  margin: 0;
  padding: 0;
  background-color:rgb(255,255,255);
  font-family: 'Roboto', Helvetica, sans-serif;
}
#app{
  width: 100wv;
  min-height: 100hv;
}

 .form-group{
        flex: 1;
        display:flex;
        justify-content: flex-start;
        flex-flow: column;
        padding: 28px;

        .error_msg{
            padding: 15px;
            color: darkred;
        }


       input{
           outline: none;
            width: 100%;
            height: 30px;
            border: 1px solid rgb(33, 37, 41);
            margin-bottom: 15px;

           text-indent: 5px;
            background-color:rgb(222, 226, 230) ;

            &.err{
                background: rgba(255, 0, 0, 0.2);
                border: 1px solid darkred;
            }

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
           border-radius: 20px;
           font-weight: 700;
           font-size: 19px;
       }
    }

</style>