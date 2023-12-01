const buttonShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
const buttonMapAll = document.querySelector('.map-all')
const valueProduct = document.querySelector('.value-total')
const productVegan = document.querySelector('.products-vegan')

function formatcurrency(value) {
    return newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}




function showAll(procuctsPrice) {
    let myLi = ''

    procuctsPrice.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p> ${product.name}</p>
            <p class="itemPrice">R$ ${formatcurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi

}

function mapAll() {

    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrice)
}

function valueTotal() {

    let total = menuOptions.reduce((acc, curr) => acc += (curr.price), 0)

    list.innerHTML = `
    <li>
        
        <p> Valor Total de Todos os Itens é R$ ${formatcurrency(total)}</p>

    </li>
    `
}

function vegan() {

    const productsVegan = menuOptions.filter(productVegan => productVegan.vegan)

    showAll(productsVegan)
}





buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
valueProduct.addEventListener('click', valueTotal)
productVegan.addEventListener('click', vegan)



