<template>
 <canvas id="myChart" width="400" height="400"></canvas>
</template>
<script>
import Chart from 'chart.js';

export default {
  name: 'Chart',
  mounted() {
    var ctx = document.getElementById("myChart");
    console.log(ctx);
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["v44", "v45", "v46", "v47", "v48", "v49"],
        datasets: [{
            label: 'PEF-värde',
            data: [640, 600, 570, 630, 720, 510],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Morgon',
            data: [640, 600, 570, 630, 720, 510],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Kväll',
            data: [620, 640, 540, 610, 750, 530],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'light-green'
            ],
            borderColor: [
                'green',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 400,
                    max: 800
                }
            }]
        }
    }
});

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
