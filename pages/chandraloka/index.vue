<template>
  <v-layout
    column
    justify-center
    align-center
    class="papyrus">
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "bordered text-xs-center"
        color="primary"
        dark>
        <v-card-title class="myheader2 devanagari text-xs-center">चन्द्रालोक-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</v-card-title>
        <v-card-title class="myheader2 papyrus text-xs-center">Interactive tutorial for Candrāloka</v-card-title>
        <v-card-text>
          <p>Interactive self learning software for learning rhetorics used in Sanskrit poetry.</p>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-dialog
            v-model="dialog"
            scrollable>
            <v-btn
              slot="activator"
              :ripple="{ class: 'error--text' }"
              round
              color="accent"
              class="text-capitalize font-weight-bold"
              large> About <br> Candrāloka</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title class="myheader papyrus">Candrāloka</v-card-title>
              <v-divider/>
              <v-card-text class="subheading papyrus font-weight-bold"/>
              <v-divider/>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  color="secondary"
                  ripple
                  @click.native="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer/>
          <v-btn
            round
            color="accent"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="accent"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/exercises"
            large>अभ्यासाः <br> Exercises</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false
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

.bg1 {
  background: linear-gradient(
      0deg,
      rgba(241, 241, 171, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url(~/assets/img/bg3.jpg) no-repeat;
  background-size: cover;
  color: darkred;
}
</style>
