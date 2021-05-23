<template>
    <footer class="footer">
        <button @click="goto('/')">
        <i class="material-icons footcon">home</i>
        </button>

        <button>
            <i class="material-icons footcon">search</i>
        </button>

        <button @click="goto('/newpost')">
        <i class="material-icons footcon">add_a_photo</i></button>


        <button>
            <i class="material-icons footcon">notifications</i>
        </button>

        <button @click="goto('/profile')">
        <i class="material-icons footcon">insert_emoticon</i>
        </button>
        
    </footer>        
</template>

<script>
export default {
    methods: {
        goto(path){
            this.$router.push(path)
            
            }
        }
}
</script>