let input = prompt()
let newText = ''

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if(element === '#' || element === '@' ||element === '&' ||element === '^'){
        continue
    }

    newText = newText + element
}

console.log(newText)

//CLOSURE

const myFunc = () => {
    let i = 0
    return () => {
        i++
        return i
    }
}

let f = myFunc()

console.log(f())
console.log(f())
console.log(f())
console.log(f())


// NORMAL FUNCTION ISHLEMEYECEK
const myFunc2 = () => {
    let i = 0
    i++
    return i
}

console.log(myFunc2())
console.log(myFunc2())
console.log(myFunc2())
console.log(myFunc2())
