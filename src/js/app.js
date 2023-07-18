/* Импортируем webpack */
 import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();

/* Импорт Chart.js */
import Chart, { plugins } from 'chart.js/auto';


 //select
const selected = document.querySelector(".form__selected-one");
const optionsContainer = document.querySelector(".form__area-select-container-one");
const optionsList = document.querySelectorAll(".form__area-select-option-one");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active-one")
  selected.classList.toggle("active-select-one");
});

optionsList.forEach(one => {
  one.addEventListener("click", () => {
    selected.innerHTML = one.querySelector(".form__area-select-label-one").innerHTML;
    optionsContainer.classList.remove("active-one")
    selected.classList.remove("active-select-one");
  });
});

const selectedTwo = document.querySelector(".form__selected-two");
const optionsContainerTwo = document.querySelector(".form__area-select-container-two");
const optionsListTwo = document.querySelectorAll(".form__area-select-option-two");

selectedTwo.addEventListener("click", () => {
  optionsContainerTwo.classList.toggle("active-two")
  selectedTwo.classList.toggle("active-select-two");
});

optionsListTwo.forEach(two => {
  two.addEventListener("click", () => {
    selectedTwo.innerHTML = two.querySelector(".form__area-select-label-two").innerHTML;
    optionsContainerTwo.classList.remove("active-two")
    selectedTwo.classList.remove("active-select-two");
  });
});

const selectedThree = document.querySelector(".form__selected-three");
const optionsContainerThree = document.querySelector(".form__area-select-container-three");
const optionsListThree = document.querySelectorAll(".form__area-select-option-three");

selectedThree.addEventListener("click", () => {
  optionsContainerThree.classList.toggle("active-three")
  selectedThree.classList.toggle("active-select-three");
});

optionsListThree.forEach(three => {
  three.addEventListener("click", () => {
    selectedThree.innerHTML = three.querySelector(".form__area-select-label-three").innerHTML;
    optionsContainerThree.classList.remove("active-three")
    selectedThree.classList.remove("active-select-three");
  });
});

//counter form
const counters = document.querySelectorAll('[data-counter]');

if (counters) {
 counters.forEach(counter => {
   counter.addEventListener('click', e => {
     const target = e.target;

     if (target.closest('.form__counter-button')) {
       if (target.closest('.form__counter-one').querySelector('input').value == '' && (target.classList.contains('form__counter-button-minus-one') || target.classList.contains('form__counter-button-plus-one'))) {
         target.closest('.form__counter-one').querySelector('input').value = 0;
       }

       let value = parseInt(target.closest('.form__counter-one').querySelector('input').value);

       if (target.classList.contains('form__counter-button-plus-one')) {
         value++;
       } else {
         --value;
       }

       if (value <= 0) {
         value = 0;
         target.closest('.form__counter-one').querySelector('.form__counter-button-minus-one').classList.add('disabled')
       } else {
         target.closest('.form__counter-one').querySelector('.form__counter-button-minus-one').classList.remove('disabled')
       }

       target.closest('.form__counter-one').querySelector('input').value = value;
     }
   })
 })	
}
//input range
const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
// section headers, burger
let btnMenu = document.getElementsByClassName("btn-menu");
let body = document.body
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
    });
}

//charts
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
