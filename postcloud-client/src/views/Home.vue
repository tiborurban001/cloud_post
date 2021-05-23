<template>
  <main class="view feed">

    <article class="post" v-for="post in feed" :key="post.id">
      <section class="post-user">
        posted by:  <span class="italic">{{ post.display_name }}</span>
        
      </section>
      
      
      <section class="post-picture">
        <img :src="post.image" :alt="post.desc" class="post-image">
      </section>
      <footer class="post-desc">
       <p><strong>{{ post.display_name }}: </strong><span class="italic">{{post.desc}}</span> </p>
      <p class="timestamp">{{ timestamp2Date(post.timestamp) }}</p>
       <section class="icons">
         <i class="material-icons actions">favorite</i>
         <i class="material-icons actions">chat_bubble</i>
         <i class="material-icons actions">share</i>
       </section>
      </footer>
    </article>
    
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
    //logout() {
    //  this.$store.commit('logout');
   // }
   // ,
    timestamp2Date (timestamp) {
      timestamp = new Number(timestamp);
      let d = new Date(timestamp);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      if(month < 10){
        month = "0" + month;
      }
      if(day < 10){
        day = "0" + day;
      }
      return day + '/' + month + '/' + year;
    }
  }
}
</script>