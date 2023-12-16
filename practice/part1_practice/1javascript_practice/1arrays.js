const t = [1, -1, 3]

console.log('t', t)
t.push(5)
console.log('t.push(5)', t)

console.log('---')

console.log('t.length', t.length)
console.log('t[1]', t[1])

console.log('---')

t.forEach(value => {
    console.log('index', t.indexOf(value), ':', value)
})

console.log('---')

const t2 = t.concat(6)
console.log('t', t)
console.log('t2 = t.concat(6)', t2)

console.log('---')

const m1 = t.map(value => value * 2)
console.log('m1 = t.map(value => value * 2)', m1)

console.log('---')

m2 = t.map(value => '<li>' + value + '</li>')
console.log('m2', m2)

console.log('---')

const [first, second, ...rest] = t
console.log('first', first)
console.log('second', second)
console.log('rest', rest)

console.log('---')