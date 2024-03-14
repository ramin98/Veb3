// let a =  500
// let b =  400
// let result = a + b
// console.log(result)
/* result = a - b
console.log(result)
result = a * b
console.log(result)
result = a / b
console.log(result)*/
// let n = 12
// let s = 'HELLO'
// let bool = true
// let u
// let nu = null
// let bi = BigInt(9999999999999999999999999999999999999999999999999999999999999999999999)
// let sy = Symbol('sdfsd')
// console.log(n)
// console.log(s)
// console.log(bool)
// console.log(u)
// console.log(nu)
// console.log(bi)
// console.log(sy)

// console.log(typeof n)
// console.log(typeof s)
// console.log(typeof bool)
// console.log(typeof u)
// console.log(typeof nu)
// console.log(typeof bi)
// console.log(typeof sy)

// console.log(12 % 3)

// let a = 1
// a++
// console.log(a)
// a--
// console.log(a)
// a--
// console.log(a)
// a--
// console.log(a)
// ++a
// console.log(a)

// let a = 1
// let b = a++
// console.log(a)
// console.log(b)

// let a1 = 1
// let b1 = ++a1
// console.log(a1)
// console.log(b1)

// let n = 'Text' * 5
// console.log(typeof n)
// let i = 256 / 0
// console.log(typeof i)

// const message = 'He\'s coming to visit you';
// console.log(message);

// const firstName = 'Trevor';
// const lastName = 'Philips';
// const greet = `Hello, my name is ${firstName} ${lastName}`;
// const greet1 = 'Hello, my name is' + ' ' + firstName + '' + lastName;
// console.log(greet)
// let input1 = Number(prompt())
// let input2 = Number(prompt())
// alert(input1 / input2)



// let stringNumberFisrt = '100'
// let stringNumberSecond = '23'
// stringNumberFisrt = +stringNumberFisrt
// stringNumberSecond = Number(stringNumberSecond)

// let result = stringNumberFisrt + stringNumberSecond

// console.log(result)

// console.log('25' / '5')
// console.log('25' * '5')
// console.log('25' - '5')

// console.log(Number(true));
// // 1
// console.log(Number(false));
// console.log(Number(''));
// console.log(Number(null));

// console.log(Number(undefined));

// console.log(Number('hello'));




// console.log(String(null))
// // "null"
// console.log(String(undefined))
// // "undefined"
// console.log(String(true))
// // "true"
// console.log(String(123))

// "123"

// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(true))
// console.log(Boolean(123))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean('df'))
// console.log(Boolean('123'))
// console.log(Boolean(-5))
// console.log(Boolean(NaN))
// console.log(Boolean(Infinity))


// let input = prompt()
// let newText = ''

// for (let index = 0; index < input.length; index++) {
//     const element = input[index];
//     if(element === '#' || element === '@' ||element === '&' ||element === '^'){
//         continue
//     }

//     newText = newText + element
// }

// console.log(newText)

// console.log(25 > 10);
// // true
// console.log(12 < 3);
// // false
// console.log(17 >= 17);
// // true
// console.log(14 <= 13);
// // false

// console.log(25 == '25');
// // true
// console.log(14 != '14');
// // false
// console.log(0 === '');

// console.log(25 === '25');
// // false
// console.log(14 !== '14');
// // true
// console.log(0 === '');

// console.log(!false)

// console.log(true && true && true && true)

// let capital = prompt()
// if(capital === 'Moscow'){
//     console.log('Moscow')
// } else if(capital === 'Baku'){
//     console.log('Baku')
// }else if(capital === 'Tehran'){
//     console.log('Tehran')
// } else{
//     console.log('Other')
// }

// if(capital === 'Moscow'){
//     console.log('Moscow')
// }  else{
//     console.log('Other')
// }
// else if(capital === 'Baku'){
//     console.log('Baku')
// } 
// else if(capital === 'Tehran'){
//     console.log('Tehran')
// } 

// switch (capital) {
//     case 'Moscow':
//         alert('Russia')
//         break
//     case 'Baku':
//         alert('Azerbaijan')
//         break
//     case 'Tehran':
//         alert('Iran')
//         break
//     default:
//         alert('OTHER')
//         break
// }
// let gender1 = 'F'
// let active = gender1 === 'F' ? 'Female' : gender1 === 'M' ? 'Male' : 'other'
// console.log(active)
// let gender = 'F'
// let choose
// switch (gender) {
//     case 'F':
//         choose = 'Female'
//         break
//     case 'M':
//         choose = 'Male'
//         break
//     default:
//         choose = 'Other'
//         break
// }

// const printOperation = (a, b, operator) => {
//     switch (operator) {
//         case '+':
//             return a + b
//         case '-':
//             return a - b
//         case '*':
//             return a * b
//         case '/':
//             return  a / b
//         default:
//             return 'OTHER'
//     }
// }

// console.log(printOperation(10, 5, '/'))
// console.log(printOperation(10, 5, '-'))
// console.log(printOperation(10, 5, '*'))
// console.log(printOperation(10, 5, '+'))

// const f = () => {
//     return 5 + 10
// }

// let r = f()
// console.log(r)


// const t = a => a + 10
// console.log(t(1))

// const myFunc = () => {
//     let i = 0
//     return () => {
//         i++
//         return i
//     }
// }

// let f = myFunc()

// console.log(f())
// console.log(f())
// console.log(f())
// console.log(f())



// const myFunc2 = () => {
//     let i = 0
//     i++
//     return i
// }

// console.log(myFunc2())
// console.log(myFunc2())
// console.log(myFunc2())
// console.log(myFunc2())

// const f = a => {
//     return a
// } 

// console.log(f(1))

// let value = true
// const myF = () => {
//     if(value === null){
//         return
//     }

//     console.log('HELLO')
// }
// myF()

// function h(){

// }
// arrowFunc()

// const arrowFunc = () => {
//     console.log('HELLO')
// }

// function normalFunc() {
//     console.log(a)
//     console.log('HELLO')
//     let a = 1
// }

// if(true){
//     var a = 1
// }

// console.log(a)

// normalFunc()

// let i = 0
// while(true){
//     let input = prompt()
//     if(input === 'END'){
//         break
//     }else if(input === 'NEXT'){
//         continue
//     }
//     alert(input)
// }

// let i = 0

// do{
//   i++
//   console.log(i)
// }while(i > 10)


// let input = 'HELLO'
// let textLength = input.length
// let text = ''
// while (textLength > 0) {
//     textLength--
//     console.log(input[textLength])
//     text += input[textLength]
// }

// console.log(text)

let text1 = '1234567890-=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
let newText = ''
for (let index = 0; index < 12; index++) {
    newText += text1[Math.floor(Math.random() * text1.length)];
}

console.log(newText)