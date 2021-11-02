<template>
  <div class="line-charts">
    <highcharts :options="chartOptions" ></highcharts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'line charts'
        },
        xAxis: {
          categories: ['Chinese', 'Math', 'English', 'Phsis']
        },
        yAxis: {
          title: {
            text: 'Level'
          }
        },
        series: [{
          name: '陈火红',
          data: [1, 2, 3, 3]
        }, {
          type: 'line',
          name: '熊滔',
          data: [4, 5, 6, 7]
        }]
      }
    }
  }
}
</script>