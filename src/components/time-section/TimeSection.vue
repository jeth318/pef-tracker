<template>
<sui-container class="container-margin-top">
  <sui-grid>
      <sui-grid-column :centered=true :width=16>
          <sui-accordion styled>
          <sui-accordion-title>
            <sui-icon name="dropdown" />
           <i class="tags icon"></i> Omständigheter 
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="tags-wrapper">
              <sui-label 
                  class="circumstance-label"
                  v-for="(tagItem, index) in allTags" 
                  :key="index" 
                  horizontal 
                  @click="handleTag(tagItem)" 
                  :color="isTagSelected(tagItem) ? 'purple': null" 
                  size="large"
                >
                {{tagItem.name}}
              </sui-label>
            </div>
          </sui-accordion-content>
          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <i class="comment icon"></i> Kommentar
          </sui-accordion-title>
          <sui-accordion-content>
            <sui-form>
        <sui-form-field>
            <input v-model="measurement.comment" placeholder="Frivilligt..." >
        </sui-form-field>
      </sui-form>
          </sui-accordion-content>
        </sui-accordion>

      </sui-grid-column>
      <sui-grid-column :centered=true :width=16 style="text-align: center">
        <sui-button @click="handleSave" className="margin-extra" size="huge" color="green" content="Spara"></sui-button>
      </sui-grid-column>
  </sui-grid>
  </sui-container>

</template>

<script>
import { createPef } from "../../resources/pef-resource.js";
import ConfirmationModal from '../confirmation-modal/ConfirmationModal.vue';

const allTags = [
  { name: "Andfådd" },
  { name: "Trött" },
  { name: "Nyvaken" },
  { name: "Efter träning" },
  { name: "Nån annan3" },
  { name: "Nån annan4" },
  { name: "Nån annan5" }
];

export default {
  name: "TimeSection",
  components: { ConfirmationModal },
  data: () => ({
    measurement: {
      date: null,
      pefValue: null,
      tags: [],
      comment: ""
    },
    allTags,
    unsubscribe: () => {}
  }),
  created() {
    console.log(this.$store);
    this.unsubscribe = this.$store.subscribe(this.update);
  },
  methods: {
    update(mutation, state) {
      this.measurement.pefValue = state.pefValue;
      console.log("Update", this.measurement.pefValue);
    },
    handleClick() {},
    handleSave() {
      this.measurement.date = new Date();
      createPef(this.measurement)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },
    handleTag(tag) {
      const { tags } = this.measurement;
      if (this.isTagSelected(tag)) {
        this.measurement.tags = tags.filter(tagItem => tagItem !== tag);
      } else {
        this.measurement.tags.push(tag);
      }
    },
    isTagSelected(tag) {
      return this.measurement.tags.includes(tag);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin {
  margin-top: 5px !important;
}

.tag {
  margin: 10px !important;
}

.circumstance-label {
  margin: 5px !important;
}

.tags-wrapper {
  text-align: center;
}
</style>
