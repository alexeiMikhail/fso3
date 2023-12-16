const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log('object1:', object1)
console.log('object2:', object2)
console.log('object3:', object3)

console.log('---')

console.log('object1.name', object1.name)
const fieldName = 'age'
console.log('object1[age]', object1[fieldName])

console.log('---')

object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log('new object1:', object1)

console.log('---')

