<template>
  <v-container class="mt-0 pt-0">
    <v-layout
      row
      class="neg_margin">
      <v-btn
        :ripple="{ class: 'error--text' }"
        :to="previous"
        color="accent darken-2"><b>Previous</b></v-btn>
      <v-spacer/>
      <v-btn
        :ripple="{ class: 'error--text' }"
        :to="next"
        color="accent darken-2"><b>Next</b></v-btn>
    </v-layout>
    <v-card
      color="accent lighten-4"
      class="mt-0 pt-0 bordered">
      <v-card-title primary-title>
        <h3 class="myheader">{{ lesson.id }}. <span
          v-if="lesson.title_sans" >{{ lesson.title_sans }} <br></span>{{ lesson.title_eng }}</h3>
      </v-card-title>

      <v-layout
        row
        class="myheader3">
        <v-flex
          v-show="lesson.sloka"
          xs6>
          <div
            class="devanagari px-1"
            v-html="lesson.sloka"/>
        </v-flex>
        <v-flex
          v-show="lesson.eng"
          xs6>
          <div
            class="font-weight-bold px-1"
            v-html="lesson.eng"/>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      open: ['public'],
      id: String(this.$route.params.id),
      lesson: '',
      index: '',
      prev_lesson: '',
      next_lesson: '',
      length: '',
      previous: '/',
      next: '/',
      currentNode: null
    }
  },
  layout: 'lessons',
  created() {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    this.index = this.$store.state.upayukta_lessons.findIndex(
      lesson => String(lesson.id) === this.id
    )
    this.lesson = this.$store.state.upayukta_lessons[this.index]
    this.prev_lesson = this.$store.state.upayukta_lessons[this.index - 1]
    this.next_lesson = this.$store.state.upayukta_lessons[this.index + 1]
    this.length = this.$store.state.upayukta_lessons.length
    this.previous =
      this.index > 1
        ? '/upayukta/lessons/' + this.prev_lesson.id
        : '/upayukta/lessons/1'
    this.next =
      this.index < this.length - 1
        ? '/upayukta/lessons/' + this.next_lesson.id
        : '/upayukta/lessons/'
    // console.log(this.index)
    console.log(this.lesson)
    // console.log(this.next_lesson.id)
    // console.log(this.$store.state.lessons)
    // console.log(this.$axios.$get('/lessons/' + this.$route.params.id))
  },
  methods: {
    nexttab() {
      const active = parseInt(this.active)
      this.active = active < this.lesson.types - 1 ? active + 1 : 0
    }
  }
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

.neg_margin {
  margin-top: -10%;
}

.tree {
  height: 350px;
  width: 80%;
}
</style>
