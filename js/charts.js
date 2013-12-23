$(function () {
  $('#endowment-allocation').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
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
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          color: '#000000',
          connectorColor: '#000000',
          format: '<b>{point.name}</b>: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Allocation',
      data: [
      ['The Phillipian Online',  10],
      ['Technology and equipment renewal',  10],
      ['Free copies of <i>The Phillipian</i> for students',  48],
      ['Off-campus opportunities',  32]
      ]
    }]
  });
});