/* Импорт Chart.js */
import Chart, { plugins } from 'chart.js/auto';

//bar chart
const ctxBar = document.getElementById('bar-chart');

  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Unit'],
      datasets: [{
        label: 'Conversions',
        data: [30.4, 25, 12, 22, 29, 31, 25],
        borderWidth: 0,
        backgroundColor: [
          'rgba(214, 207, 110, 1)'
        ],
        categoryPercentage: 0.4,
        barPercentage: 1
      },
      {
        label: 'Pageviews',
        data: [41, 33, 16, 29.5, 38, 42, 32],
        borderWidth: 0,
        backgroundColor: [
          'rgba(20, 163, 139, 1)'
        ],
        categoryPercentage: 0.4,
        barPercentage: 1
      }]
    },
    
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend:{
          position: 'bottom',
          reverse: true,
          onHover: (event => {
            console.log(event.chart.canvas.style.cursor = 'pointer')
          }), 
          labels:{
            boxWidth: 28,
            boxHeight: 28,
            useBorderRadius: true,
            borderRadius: 3,
            color: '#7C9CBF',
            padding: 15,
          }
        }
      },
      scales: {
        x:{
          grid: {
            drawTicks: false,
            drawOnChartArea: false
          },
          ticks: {
            color: '#7C9CBF',
            padding: 15
          },
        },
        y: {
          grace: 1,
          border: {
            display: true,
            dash: [5, 5],
            width: 0
          },
          grid: {
            drawTicks: false,
            offset: false,
          },
          ticks: {
            color: '#7C9CBF',
            font: {
              size: 14,
              weight: 500,
            },
            padding: 15,
            stepSize: 10,
            // callback: function (value, index, ticks){
            //   return `${value}K`;
            // },
            callback: ((value, index, values) => {
              const totalItems = values.length - 1;
              console.log(values);
              if(index !== totalItems){
                return value + 'K';
              }
            })
          },
          beginAtZero: true,
        },
     }
    }
  });

  //line chart
  const ctxLine = document.getElementById('line-chart');

  new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Fill Variant',
        data: [5, 105, 101, 46, 48, 151, 170],
        borderWidth: 2,
        borderColor: '#D6CF6E',
        backgroundColor: [
          'rgba(214, 207, 110, 1)'
        ],
        tension: 0.5
      },
      {
        label: 'Ghost Variant',
        data: [180, 148, 51, 50, 100, 102, 60],
        borderWidth: 2,
        borderColor: '#14A38B',
        backgroundColor: [
          'rgba(20, 163, 139, 1)'
        ],
        tension: 0.5
      }]
    },
    
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend:{
          position: 'bottom',
          reverse: true,
          onHover: (event => {
            console.log(event.chart.canvas.style.cursor = 'pointer')
          }), 
          labels:{
            boxWidth: 28,
            boxHeight: 28,
            useBorderRadius: true,
            borderRadius: 3,
            color: '#7C9CBF',
            padding: 15,
          }
        }
      },
      scales: {
        x:{
          grid: {
            drawTicks: false,
            drawOnChartArea: false
          },
          ticks: {
            color: '#7C9CBF',
            padding: 15
          },
        },
        y: {
          grace: 1,
          border: {
            display: true,
            dash: [5, 5],
            width: 0
          },
          grid: {
            drawTicks: false,
            offset: false,
          },
          ticks: {
            color: '#7C9CBF',
            font: {
              size: 14,
              weight: 500,
            },
            padding: 15,
            stepSize: 50,
          },
          beginAtZero: true,
        },
     }
    }
  });

  //donut chart
  const ctxDonut = document.getElementById('donut-chart');

  new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
      labels: ['35% Web', '45% Mobile', '20% Social'],
      datasets: [{
        label: 'Sales',
        data: [35, 45, 25],
        borderWidth: 0,
        backgroundColor: [
          'rgba(20, 163, 139, 1)',
          'rgba(214, 207, 110, 1)',
          'rgba(8, 128, 174, 1)',
        ],
      }]
    },
    
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend:{
          position: 'right',
          onHover: (event => {
            console.log(event.chart.canvas.style.cursor = 'pointer')
          }), 
          labels:{
            usePointStyle: true,
            pointStyle: 'rectRounded',
            boxWidth: 28,
            boxHeight: 28,
            color: '#7C9CBF',
            padding: 15,
          }
        }
      },
      scales: {
        x:{
        display: false,
        },
        y: {
          display: false,
        },
     }
    }
  });
