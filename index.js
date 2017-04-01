var evens = [0, 2, 4, 6, 8, 10]

evens.forEach(even => { console.log(`${even} is not odd!`)})

evens.forEaach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

function square(n) {
  console.log(n*n)
}
