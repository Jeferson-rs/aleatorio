/*calcular desconto
Todos os produtos acima de 30 reias, aplicar 10% de desconto.
*/

const cart = [15, 20, 35]
let valueFinal = 0

function calculeDiscount(price, valueDiscont){
    const result = price * valueDiscont / 100
    return result
}

cart.forEach(value => {
    

    if (value => 30){
        const discont = calculeDiscount(value, 10)
        valueFinal += (value - discont)
    }else{
        valueFinal += value
    }

    
});


console.log(valueFinal)
