const sum = (p1, p2) => {
    console.log('p1:', p1)
    console.log('p2:', p2)
    return p1 + p2
}

const result = sum (1, 5)
console.log('result:', result)

const brk = () => {console.log('---')}
brk()

const square = p => {
    console.log('p (to be squared)', p)
    return p * p
}

const square2 = p => p * p
console.log('square(7)', square(7))
console.log('square2(7)', square2(7))

brk()

// function declaration
function product(a, b) {
    return a * b
}
console.log('product(2, 6)', product(2, 6))

// function expression
const average = function(a, b) {
    return (a + b) / 2
}
console.log('average(2, 5)', average(2,5))

brk()