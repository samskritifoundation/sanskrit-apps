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
        <v-card-title>
          <h3>Activities</h3>
          <v-spacer/>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="activity"
          :search="search"
          class="elevation-1 defaultTable">
          <template
            slot="items"
            slot-scope="props">
            <td @click="opendialog(props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.category }}</td>
            <td @click="opendialog(props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.name_sans }}</td>
            <td @click="opendialog(props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.meaning }}</td>
            <td @click="opendialog(props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.verse }}</td>
          </template>
          <v-alert
            slot="no-results"
            :value="true"
            color="error"
            icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
        <v-dialog
          v-model="dialog"
          max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Verbs belonging to category: {{ activity_sans }} - {{ activity_eng }}</span>
            </v-card-title>
            <v-card-text class="ma-1">
              <div
                v-for="(verb,i) in verbs"
                :key="i">

                <h3>{{ i+1 }}. {{ verb.root }}</h3>
                <v-subheader>Example: {{ verb.form }}</v-subheader>
                <p>{{ verb.gana }}</p>
                <p><a
                  :href="verb.forms_url"
                  target="_blank">Verb Forms</a></p>
                <p>{{ verb.meaning }}</p>
                <p>{{ verb.obj }}</p>
                <p>{{ verb.padi }}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="blue darken-1"
                flat
                @click="close">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      verbs: '',
      activity_sans: '',
      activity_eng: '',
      headers: [
        {
          text: 'Sl no.',
          align: 'left',
          sortable: true,
          value: 'category'
        },
        { text: 'Activity Name', value: 'name_sans' },
        { text: 'meaning', value: 'meaning' },
        { text: 'Kriyanighantu Verse', value: 'verse' }
      ],
      search: ''
    }
  },
  computed: {
    activity() {
      return this.$store.state.activities
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  methods: {
    opendialog(val, sans, eng) {
      this.dialog = true
      this.activity_sans = sans
      this.activity_eng = eng
      this.verbs = this.$store.state.verbs.filter(verb => {
        return verb.category == val
      })
    },
    close() {
      this.dialog = false
    }
  }
}
</script>
