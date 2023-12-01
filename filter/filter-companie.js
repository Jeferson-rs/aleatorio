
const companies = [
    { name: 'samsung', marketValue: 50, CEO: 'Kim Hyon Suk', foundedOn: 1938 },
    { name: 'microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

/*
Adcionar 10% de valor de mercado, a todas as companhia -> map
Filtrar somente companhia fundadas abaixo de 1990 -> filter
Somar o valor de mercado das restante -> reduce


const valueCompanies = companies.map (companies => {
    companies.marketValue = companies.marketValue + (companies.marketValue / 10)
    return companies
} )

.filter (companies => companies.foundedOn < 1990)

.reduce ((acc, companies) => acc + companies.marketValue, 0 )

console.log(valueCompanies)
*/





//subtrair 10% de valor de mercado a todas as companhias.
//filtrar somente companhias fundadas depois de 1980.
//somar o valor de mercado das restantes


const sub10percent = (company) => {
    company.marketValue = company.marketValue - company.marketValue /10
    return company
}

const filterCompany = (comapny) => comapny.foundedOn > 1980

const reduceCompany = (acc,comapny) => acc + comapny.marketValue

const valueCompanie = companies

    .map(sub10percent)
    .filter( filterCompany)
    .reduce(reduceCompany, 0)

console.log(valueCompanie)
