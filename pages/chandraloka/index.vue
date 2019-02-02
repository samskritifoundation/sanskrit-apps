<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/cl.png" >
    <v-flex
      xs12
      sm8
      md8
      align-center>
      <v-card
        class = "text-xs-center"
        color = "secondary"
        dark
        align-center>
        <v-card-title><h1>चन्द्रालोक-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1></v-card-title>
        <v-card-title><h2>Interactive tutorial for Candrāloka</h2></v-card-title>
        <v-card-text>
          <h3>Interactive self learning software for learning rhetorics used in Sanskrit poetry.</h3>
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
              color="accent darken-2"
              class="font-weight-bold"
              large> About <br> Candrāloka</v-btn>
            <v-card
              color="info"
              class="bg1"
              light>
              <v-card-title><h1>Candrāloka</h1></v-card-title>
              <v-divider/>
              <v-card-text class="subheading font-weight-bold">
                <p>The Candrāloka, authored by the great poet-devotee-scholar śri Jayadeva is one of the best works that throws light on the Figures of speech (popularly known as Alaṃkāra-s) that are a unique aspect of Sanskrit literature. 'śabda' and 'Artha' are the two aspects that are considered to be the body of literature (kāvya). Just as one adorns oneself with ear-rings, necklaces and such other ornaments to manifest the beauty of the human body, that shines forth on accounts of the ornaments, the body of the kāvya (literary work) too shines forth and becomes enjoyable when it is embellished with figures of speech that are aptly known as 'Alaṃkāra-s'.  That is why it has been mentioned 'काव्यशोभाकरान् धर्मान् अलङ्कारान् प्रचक्षते ' .</p>

                <p>While there are several works that propound the definitions, give examples and explain the various Alaṃkāra-s uniquely employed in Sanskrit literature, the crest jewel among all such works is the Candrāloka of the exalted poet-scholar-devotee Jayadeva, who has written this book in an extremely simple, lucid and easily-understandable style. This book is studied as a primer by all beginners as well as scholars who are well-versed in the topic, for its depth and profoundness.  The same text is produced here with an English translation in the form of learnable modules.</p>

              </v-card-text>
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
            color="accent darken-2"
            class="font-weight-bold"
            nuxt
            to="/chandraloka/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="accent darken-2"
            class="font-weight-bold"
            nuxt
            to="/chandraloka/exercises"
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
.cl_bg {
  background-image: url('~assets/img/cl_bg.png');
  background-size: cover;
}

img {
  width: 60%;
}
</style>
