const sum = (a, b, c) => {
    return a + b + c
}

const mul = (a, b, c)=>{
    return a * b * c
}

// Currying will return curried function
// In currried we check if length of args is same as functional arguments
// if not then return  new curried function to take the more arguments
// if yes then return the function
const currying = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

console.log(currying(sum)(1)(2)(3)) // 6
console.log(currying(sum)(1)(2,3)) // 6
console.log(currying(sum)(1,2,3)) // 6
console.log(currying(mul)(4)(5)(6)) // 120
// We can use many function to curry