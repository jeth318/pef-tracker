<template>
 <sui-grid>
  
  <sui-grid-column :centered=true :width="14">
    <h1 class="title">Ny mätning</h1>
      <vue-slider 
        ref="slider"
        :dotSize=40
        :value=600
        :min=400
        :max=800
        :interval=10
        :tooltip-style="labelStyle"
        :startAnimation=true
        v-model="pefValue"
        @drag-end="dragEnd"

      ></vue-slider>
  </sui-grid-column>

 </sui-grid>
</template>

<script>

import vueSlider from 'vue-slider-component';

export default {
  name: 'Slider',
  components: {'vue-slider': vueSlider},
  data: () => ({
    pefValue: 600,
    unsubscribe: () => {},
    labelStyle: {fontSize: '30px', padding: '10px'}
  }),
  created(){
    this.unsubscribe = this.$store.subscribe(this.update); 
  },
  methods: {
    update(mutation, state){
      this.pefValue = state.pefValue;
    },
    dragEnd(slider){
      this.$store.commit('setPefValue', slider.getValue())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 70px;
    text-align: center;
  }
</style>
