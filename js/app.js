const btn = document.querySelector('.btn__select');
const inputRate = document.querySelector('.input__rate');
const inputPrice = document.querySelector('.input__price');
const render = document.querySelector('.list');
const totalAmount = document.querySelector('.total__amount');



function renderList(value1, value2) {  // Rendering of list items
   render.innerHTML += `
   <li class="list__item">
      <div class="list__item-info">
         <span class="list__item-rate">${value1}</span>
         <span class="list__item-price">${value2.toFixed(2)} грн</span>
      </div>
      <button class="btn__delete"><img class="cancel__svg" src="./img/free-icon-remove-1828851 (1) 1.svg" alt="cancel"></button>
   </li>
   `;
}

function addTask() {   // Adding costs
   const valueRate = inputRate.value;
   const valuePrice = inputPrice.value;
  
   if (!valueRate || !valuePrice) {
      alert('Пожалуйста, заполните оба поля.');
      return;
   }

   const numericPrice = parseFloat(valuePrice);

   if (isNaN(numericPrice)) {
      alert('Пожалуйста, введите корректное число в поле "Ціна"');
      return;
   }

   renderList(valueRate, numericPrice);
   removeTask();
   renderPrice()
}


function removeTask() { // Delete costs
   const btnDelete = document.querySelectorAll('.btn__delete');

   btnDelete.forEach((button) => {

      button.addEventListener('click', () => {
         let list = button.closest('li');
         list.remove();
         renderPrice();
      });

   });
}

function renderPrice (){  // Rendering of the updated total value
   const listPrice = document.querySelectorAll('.list__item-price')
   let newAmount = 0;
   listPrice.forEach((elem)=>{
      newAmount += parseFloat(elem.textContent);
   });
   totalAmount.textContent = newAmount.toFixed(2);
}


btn.addEventListener('click', addTask); 