<template>
  <div id="app">
<div class="ui teal three item inverted menu">
  <a class="active item">
    Mätare
  </a>
  <a class="item">
    Statistik
  </a>
  <a class="item">
    Profil
  </a>
</div>
    <div class="image-wrapper">
      <img alt="Vue logo" src="./assets/happy-lungs.png">
    </div>
    <Chart />
    <PreviousRecords />
    <Slider />
    <TimeSection />
  </div>
</template>

<script>
import TimeSection from './components/time-section/TimeSection.vue';
import Slider from './components/slider/Slider.vue';
import PreviousRecords from './components/previous-records/PreviousRecords.vue';
import Chart from './components/chart/Chart.vue';

export default {
  name: 'app',
  components: {
    Slider,
    TimeSection,
    PreviousRecords,
    Chart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

img {
  margin-bottom: 20px;
  height: 50%;
  width: 50%;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}
</style>
