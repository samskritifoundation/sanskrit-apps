<template>
  <v-container class="mt-0 pt-0">
    <v-card
      color="teal lighten-3"
      class="bordered papyrus mt-0 pt-0">
      <v-card-title primary-title>
        <h1>Learn Shruthabodha</h1>
      </v-card-title>
      <v-btn
        to="/srutabodha/lessons/1"
        large
        color="secondary"
        class="text-capitalize font-weight-bold"
        round> Start with introduction to the field of Sanskrit Prosody</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons'
}
</script>

<style scoped>
.bordered {
  border: 10px solid transparent;
  -webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
  -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
  border-image: url('~/assets/img/border.png') 30 round;
  border-radius: 15px;
  margin: 0;
  padding: 2%;
}
</style>
