<template>
    <main class="view profile">
        <section class="profile-head">
            <strong>{{display_name}}</strong>
            
        </section>

        <section class="posts">
            <div class="post" v-for="post in posts" :key="post._id">  
                <img class="post-image" :src="post.image">
            </div>
        </section>

    </main>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return {
            display_name: '',
            posts: []
        }
    },
    methods: {
        getProfile () {
            this.$http.post(this.$store.state.api_url + 'user/getProfile',
            {
                auth_token: localStorage.getItem('jwt')
            }).then(({ data }) => {
                this.display_name = data.details.display_name;
                this.posts = data.details.posts;
            })
        }
    },
    beforeMount() {
        this.getProfile();
    }
    
}
</script>

<style lang="scss">

.profile{
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    
    .profile-head{
        background: rgb(0,119,182);
        background: linear-gradient(0deg, rgba(0,119,182,1) 0%, rgba(0,180,216,1) 100%);
        color: white;
        font-size: 20px;
        padding: 15px;
        box-sizing: border-box;
    }

    .posts{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: min-content;
        grid-gap: 5px;
        .post{
            padding: 0;
            
            
            .post-image {
                width: 100%;
                display: block;
            }
        }
    }
}

</style>