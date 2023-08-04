/* Импорт webpack */
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();

 /*Импорт chart.js*/
import * as chartJS from "./modules/charts.js";

import * as gsapJS from "./modules/gsap.js";

/*Импорт select-pure.js*/
import SelectPure from "select-pure";

//counter form
const counter_forms = [... document.querySelectorAll('.form__counter')];

counter_forms.forEach ( function (form) {
  form.addEventListener('click', function (ev) {
    const counter_label_element = form.querySelector('.form__counter-quantity');
    let count = Number(counter_label_element.innerHTML);

    const btn_plus = form.querySelector('.counter-plus');
    const btn_minus = form.querySelector('.counter-minus');

    btn_plus.addEventListener('click', function() {
      counter_label_element.innerHTML = ++count < 10 ? `0` + Math.max(count, 1) : count;
    });

    btn_minus.addEventListener('click', function() {
      counter_label_element.innerHTML = --count < 10 ? `0` + Math.max(count, 1) : count;
    });
  });
});
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
let body = document.body;
let menuList = document.getElementById('header-content');
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
        menuList.classList.toggle('menu-open');
    });

}

