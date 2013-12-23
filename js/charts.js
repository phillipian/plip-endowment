$(function () {
  $('#endowment-allocation').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    colors: [
      '#5063A0',
      '#6C86D9',
      '#2B55D9',
      '#1c378d',
      '#12235A'
    ],
    credits: {
      enabled: false
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    title: {
      text: 'Allocations of Annual Funds',
      style: {
        color: '#000000',
        fontSize: '2.0rem'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>${point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
          // enabled: true,
          // color: '#000000',
          // connectorColor: '#000000',
          // format: '<b>{point.name}</b>: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Allocation',
      data: [
        ['The Phillipian Online', 50000],
        ['Technology and equipment renewal', 50000],
        ['Free copies of <i>The Phillipian</i> for students', 240000],
        ['Off-campus opportunities', 160000]
      ]
    }]
  });
});