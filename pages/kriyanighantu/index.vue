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
            slot-scope="props"
            router 
            to="/verbs/" 
            + 
            props.item.category>
            <td>{{ props.item.category }}</td>
            <td>{{ props.item.name_sans }}</td>
            <td>{{ props.item.meaning }}</td>
            <td>{{ props.item.verse }}</td>
          </template>
          <v-alert
            slot="no-results"
            :value="true"
            color="error"
            icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>
