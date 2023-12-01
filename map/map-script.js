

const students = [
    { name: 'Jeferson', testgrade: 10 },
    { name: 'Fernanda', testgrade: 7 },
    { name: 'Rodolfo', testgrade: 3 },
    { name: 'Maria', testgrade: 4 },
    { name: 'Liz', testgrade: 1 },
    { name: 'José', testgrade: 8 },
    { name: 'Marli', testgrade: 2 },
]


const newStudents = students.map( student => {
    return {
        name: student.name,
        resultTest: student.testgrade < 5 ? 'disapproved' : 'approved'

    }
    
    
})

console.log(newStudents)

