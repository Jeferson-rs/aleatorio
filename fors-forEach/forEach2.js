const valueSoccerTeams = [1000, 100, 300, 500, 100]
let valueFinal = 0


function calcValue(price, discont) {
    const result = (price * 10) / 100
    return result

}


valueSoccerTeams.forEach(valueteams => {

    if (valueteams >= 300 ) {
        const discont = calcValue(valueteams, 10)
        valueFinal += (valueteams - discont)
    } else {
        valueFinal += valueteams
    }


});

console.log(valueFinal)