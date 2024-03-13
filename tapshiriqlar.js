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
