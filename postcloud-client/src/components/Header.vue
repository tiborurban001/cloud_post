<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
<header class="header">
    
    <h2 class="title"><span>Post</span>Cloud</h2>
    
    <button class="logout" @click='logout'>
        <i class="material-icons lg">logout</i>
        </button>

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