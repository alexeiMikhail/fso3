const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello my name is', this.name)
    }
}

arto.greet()

console.log('---')

arto.growOlder = function() {
    this.age += 1
}

console.log('arto initial age', arto.age)
console.log('grow older....')
arto.growOlder()
console.log('arto new age', arto.age)

console.log('---')

console.log('arto:', arto)

console.log('---')

const arto2 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello my name is', this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    }
}

arto2.doAddition(1, 4)

const referenceToAddition = arto2.doAddition
referenceToAddition(10, 15)

console.log('---')

arto2.greet()

const referenceToGreet = arto2.greet
referenceToGreet()

console.log('---')

setTimeout(arto2.greet, 1000);
setTimeout(arto2.greet.bind(arto), 1000);

console.log('---')