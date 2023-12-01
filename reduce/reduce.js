
const cart = [
    {productName: 'Abóbora', valuePerKg: 5, Kg: 3.15},
    {productName: 'Laranja', valuePerKg: 3.5, Kg: 2.30},
    {productName: 'Morango', valuePerKg: 10.99, Kg: 2.10},
    {productName: 'Limão', valuePerKg: 2.20, Kg: 4.66},
    {productName: 'Melancia', valuePerKg: 7.90, Kg: 7.80},
    {productName: 'Abacate', valuePerKg: 6.30, Kg: 1.99},
]

let valueCart = cart.reduce((acc, valuekg) => {

    return acc + (valuekg.valuePerKg * valuekg.Kg)

}, 0)

console.log(`A sua compra ficou no valor de: ${valueCart}`)
