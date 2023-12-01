/**
 valor do desconto acima de 150 reais desconto de 15%.
 */
const food = [15, 124, 100, 61]
let = valueFood = 0



function calcValue(price, discont) {
    const result = (price * 15) / 100
    return result
}



food.forEach(value => {

    if (value > 150) {
        const discont = calcValue(value, 15)
        valueFood += (value - discont)
    } else {
        valueFood += value
    }

});

console.log(valueFood)