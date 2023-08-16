/* Импорт webpack */
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();

 /*Импорт chart.js*/
import * as chartJS from "./modules/charts.js";

/*Импорт select-pure.js*/
import SelectPure from "select-pure";



//counter form
const counter_forms = [... document.querySelectorAll('.form__counter')];

counter_forms.forEach ( function (form) {
  const btn_plus = form.querySelector('.counter-plus');
  const btn_minus = form.querySelector('.counter-minus');

  if (btn_plus === null || btn_minus === null)
    return;

  btn_plus.addEventListener('click', function() {
    const counter_label_element = form.querySelector('.form__counter-quantity');
    let count = Number(counter_label_element.innerHTML);
    count = (Math.max(1, count + 1));

    counter_label_element.innerHTML = count < 10 ? '0' + count : count;
  });

  btn_minus.addEventListener('click', function() {
    const counter_label_element = form.querySelector('.form__counter-quantity');
    let count = Number(counter_label_element.innerHTML);
    count = (Math.max(1, count - 1));

    counter_label_element.innerHTML = count < 10 ? '0' + count : count;
  });
});

//section form, range
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


 // section misc, star rating
 const rating_groups = [... document.getElementsByClassName('misc__rating rating__set')];

rating_groups.forEach(rating_group => {
  const starts = [... rating_group.getElementsByClassName('misc__rating-star')];
  const rating_val = rating_group.getElementsByClassName('misc__rating-value')[0];

  starts.forEach(star => {
    let old_val = Number(rating_val.innerHTML);

    star.addEventListener('click', () => {
      old_val =  Number(star.value);
      rating_val.innerHTML = old_val;
    });

    star.addEventListener('mouseover', () => {
      rating_val.innerHTML = Number(star.value);
    });

    star.addEventListener('mouseout', () => {
      rating_val.innerHTML = old_val;
    });
  });
});
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

