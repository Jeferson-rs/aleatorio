const buttonShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
let myLi = ''

function showAll() {

    menuOptions.forEach((product) => {
        myLi += `
      <li>
           <img src=${product.src}>
           <p> ${product.name}</p>
           <p class="itemPrice">R$ ${product.price}</p>
       </li>
       `
    })

    list.innerHTML = myLi

}


buttonShowAll.addEventListener('click', showAll)
console.log(myLi)
