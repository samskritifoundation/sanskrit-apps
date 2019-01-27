<template>
  <v-container class="text-xs-center">
    <v-container
      align-content-space-around
      class="mt-0 pt-0 text-xs-center">
      <img
        class="title-img-sans"
        src="~assets/img/title_sans.png"
        alt="title">
      <img
        class="title-img-eng"
        src="~assets/img/title_eng.png"
        alt="title">
    </v-container>

    <!-- buttons -->
    <v-container>
      <v-layout row>
        <v-flex xs4>
          <a
            v-ripple
            href="/" >
            <img
              class="image-btn"
              src="~assets/img/upayukta.png" >
          </a>
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/dk.png" >
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/cl.png" >
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/ss.png" >
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/kriyanighantu" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/kn.png" >
          </a>
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/sp.png" >
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/sc.png" >
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/vr.png" >
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/sr.png" >
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/ls.png" >
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/sb.png" >
        </v-flex>
        <v-flex xs4>
          <img
            v-ripple
            class="image-btn"
            src="~assets/img/srs.png" >
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog_activity: false
    }
  }
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.title-img-sans {
  width: 55%;
}
.title-img-eng {
  width: 45%;
}
.image-btn {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
