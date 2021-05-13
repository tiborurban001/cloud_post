<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
<header class="header">
    <button class="logout" @click='logout'>Logout</button>
    <h2 class="title"><span>Post</span>Cloud</h2>
    

</header>
</template>

<script>
export default {
    methods:{
    logout() {
      this.$store.commit('logout');
}
    }
}
</script>