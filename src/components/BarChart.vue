<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: [ 'tick' ],
  mounted() {
    this.renderChart(
      {
        labels: [
          "HTML",
          "CSS/SCSS",
          "JavaScript",
          "Laravel",
          "PHP"
        ],
        datasets: [{
          label: "Skills",
          backgroundColor: "#595959",
          borderColor: "#000000",
          borderWidth: 2,
          data: [78, 83, 75, 80, 78]
        }],
        options: {
          scales: {
            yAxes: [{
              types: 'linear',
              ticks: {
                min: this.tick.min,
                max: this.tick.max,
              }
            }]
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    );
  }
};


</script>
