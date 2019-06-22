<template>
 <sui-container>
  <sui-grid>
  <sui-grid-column :centered=true :width="16">
        <sui-accordion class="beige" styled>
            <sui-accordion-title active>
                <sui-icon name="dropdown" />
                <i class="comment icon"></i> Dagens mätningar
            </sui-accordion-title>
            <sui-accordion-content active>
                <div><h4 class="time-of-day-title">Morgon</h4><p>08:34 - 540 l/m</p></div>
                 <div><h4 class="time-of-day-title">Dag</h4><p>08:34 - 540 l/m</p></div>
                <div><h4 class="time-of-day-title">Kväll</h4><p>08:34 - 540 l/m</p></div>
          </sui-accordion-content>
        </sui-accordion>
  </sui-grid-column>
 </sui-grid>
 </sui-container>
</template>

<script>
export default {
  name: 'PreviousRecords',
  data: () => ({
      records: null
  }),
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        text-align: left;
    }

    .beige {
        background-color: beige !important;
    }

    .time-of-day-title {
        margin-bottom: 3px;
    }
</style>
