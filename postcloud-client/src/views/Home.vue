<template>
  <main class="feed">

    <article class="post" v-for="post in feed" :key="post.id">
      <section class="post-user">{{ post.display_name }}</section>
      <section class="post-picture">
        <img :src="post.image" :alt="post.desc" class="post-image">
      </section>
      <footer class="post-desc">
       <p><strong>{{ post.display_name }}:</strong>{{post.desc}} </p>
      <p class="timestamp">{{ timestamp2Date(post.timestamp) }}</p>
      </footer>
    </article>
    
    <button @click='logout'>Logout</button>
  </main>
</template>

<script>
export default {
  computed: {
    feed () {
      return this.$store.state.feed;
    }
  },
  methods:{
    logout() {
      this.$store.commit('logout');
    },
    timestamp2Date (timestamp) {
      let d = new Date(timestamp);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      if(month < 10){
        month = "0" + month;
      }
      if(day < 10){
        day = "0" + day;
      }
      let day = d.getDate();
      return day + '/' + month + '/' + year;
    }
  }
}
</script>