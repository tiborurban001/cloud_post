<template>
  <main class="view post">
    <section class="stream">
      <video
        ref="video"
        id="video"
        width="100%"
        height="100%"
        autoplay
        :class="!captured ? 'show' : 'hide'"
      ></video>

    </section>
      <div class="post-btns">
        <button class="capture-btn" @click="capture" v-if="!captured">
          <i class="material-icons icon">photo_camera</i>
        </button>
        <button class="cancel-btn" @click="cancel" v-if="captured">
          <i class="material-icons icon">not_interested</i>
        </button>
        <button class="upload-btn" @click="upload" v-if="captured">
          <i class="material-icons icon">cloud_upload</i>
        </button>
      </div>

    <!-- Az elkészített kép -->
    <section :class="captured ? 'show' : 'hide'">
      <canvas ref="canvas" id="canvas" width="100%" height="100%"></canvas>

      <div class="field-group">
        <label class="desctext" for="desc">
        Type your description here:
        </label>
        <input
          type="text"
          id="desc"
          name="desc"
          class="input-field"
          v-model="desc"
        />
      </div>

    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      canvas: {},
      constraints: {},
      cap: "",
      desc: "",
      captured: false,
    };
  },
  methods: {
    capture() {
      this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, this.canvas.width, this.canvas.width);
      this.cap = this.canvas.toDataURL("image/png");
      this.captured = true;
    },
    //Feltöltés megszakítása
    cancel() {
      this.captured = false;
    },
    //Feltöltés
    upload() {
      let api_url = this.$store.state.api_url;
      this.$http
        .post(api_url + "post/newpost", {
          auth_token: localStorage.getItem("jwt"),
          image: this.cap,
          desc: this.desc,
        })
        //Miután az post végbement visszadob
        .then((response) => {
          console.log(response);
          this.captured = false;
          this.cap = "";
          this.desc = "";
        });
    },
  },
  mounted() {
    this.video = this.$refs.video;
    this.video.width = window.innerWidth;
    this.video.height = window.innerHeight - 80;
    this.constraints = {
      width: window.innerWidth,
      height: window.innerWidth,
    };
    if (this.$refs.canvas) {
      this.canvas = this.$refs.canvas;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerWidth;
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: this.constraints,
        })
        .then((stream) => {
          this.video.srcObject = stream;
          this.video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
};
</script>

<style lang="scss">

</style>