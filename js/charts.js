$(function () {
  $('#analytics-graph').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    title: {
      text: 'Monthly Unique Visitors in 2013',
      style: {
        color: '#000000',
        fontSize: '2.0rem'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    series: [{
      type: 'line',
      name: 'Unique Visitors',
      data: [7580, 6744, 7930, 9839, 6717, 8296, 3109, 3264, 6221, 10526, 8892, 4738],
      pointStart: Date.UTC(2013, 0, 1),
      pointInterval: 1000 * 3600 * 24 * 31 // one month in milliseconds
    }],
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%b \'%y'
      }
    },
    yAxis: {
      title: {
        text: ''
      }
    }
  });
});