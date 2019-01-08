<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card>
        <v-card-title class="headline">Insert Activities to the database</v-card-title>
        <v-card-text>
          <form
            method="POST">
            <input
              v-model="activity.activity_num"
              type="text"
              name="activity_num"
              placeholder="Activity number">
            <input
              v-model="activity.name_sans"
              type="text"
              name="name_sans"
              placeholder="Activity name">
            <input
              v-model="activity.meaning"
              type="text"
              name="meaning"
              placeholder="meaning">
            <input
              type="submit">
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      activity: {
        activity_num: '',
        name_sans: '',
        meaning: ''
      }
    }
  },
  methods: {
    submit() {
      const res = axios.post('/activities', {
        body: this.activity
      })
    }
  }
}
</script>
