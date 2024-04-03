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

// let text1 = '1234567890-=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
// let newText = ''
// for (let index = 0; index < 12; index++) {
//     newText += text1[Math.floor(Math.random() * text1.length)];
// }

// console.log(newText)


// while(true){
//     let input = prompt()
//     if(input === 'END'){
//         break
//     }else if(input === 'NEXT'){
//         continue
//     }

//     alert(input)
// }
// for (let index = 0; true; index++) {
//     let input = prompt()
//     if(input === 'END'){
//         break
//     }else if(input === 'NEXT'){
//         continue
//     }

//     alert(input)
// }

// let text = 'Hello. World.';

// for (i = 0; i < text.length; i++) {
//   if (text[i] === '.') {
//     continue;
//   }

//   console.log(text[i]);
//   // Hello World
// }

// let text = '1234567890-=qwertyuiop[]asdfghjkl;zxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
// let password = 'salam'
// let flag = false
// while(true){
//     for (let index = 0; index < text.length; index++) {
//         const element = text[index];
//     }
// }


// loop1: for (let i = 0; i < 10; i++) {
//     console.log(i,'i')
//     loop2: for (let j = 0; j < 5; j++) {
//         console.log(j,'j')
//         if(i === 5){
//             break loop1
//         }
//     }

// }
// console.time('time')
// console.timeLog('time')
// let array = [1,2,3,4,5]
// console.timeEnd('time')
// console.timeLog('time')
// let arraySecond = new Array(1,2,3,4,5)
// let arrayThird = Array.from('12345')

// console.timeEnd('time')

// console.log(array)
// console.log(arraySecond)
// console.log(arrayThird)

// let arr = ['Tom', 'Eddard', 'Ramin']
// console.log(arr)
// arr[1] = 'Classfied'
// console.log(arr)

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(arr[index])
// }


// let arr = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// let arrays =  arr.concat(arr2)
// console.log(arrays.join('--'))
// console.log(arrays.indexOf(2))
// console.log(arrays.includes(11))
// arrays.reverse()
// console.log(arrays)
// arrays = 1
// console.log(Array.isArray(arrays))
// console.log(arr.at(4))
// arr.fill('a', 2, 4)
// console.log(arr)
// arr.push(1)
// console.log(arr)
// arr.push(2)
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.pop()
// console.log(arr)
// let input = Number(prompt())
// let input2 = Number(prompt())
// let input3 = Number(prompt())


// arr.splice(input,1,input2, input3)
// console.log(arr)
// let el = arr.slice(1,3)
// console.log(el)


// function plusFunction(callback) {
//        return callback(1)
// }

// let result = plusFunction(a => a)
// console.log(result)

// arrays.forEach((item) => {
//     console.log(item)
// })

// let newArray = arrays.filter((item) => item !== 1)
// console.log(newArray)
// newArray = newArray.map((item) => {
//     if(item % 2 === 0){
//         return item * 5
//     }else{
//         return 2
//     }
// })
// console.log(newArray)
// console.time('time')
// console.timeLog('time')

// for (const iterator of arrays) {
//     console.log(iterator)
// }
// console.timeEnd('time')

// console.timeLog('time')
// arrays.forEach((item) => {
//     console.log(item)
// })
// console.timeEnd('time')

// let el = arrays.findIndex((item) => item === 1)
// console.log(el)

// let ua = [2,5,1,8,3]

// for (let i = 0; i < ua.length; i++) {
//     for (let j = 0; j < (ua.length - 1 - ); j++) {
//         if(ar)

//     }

// }

// let array =  ['Tom', 'Eddard', 'Ramin', 'Samir', 'Xeyal','Samir', 'Xeyal']
// let arrayOfNumbers =  [1,2,3,4,5]

// let [firstUser, secondUser, thirdUser, ...otherUsers] = array
// console.log(firstUser)
// console.log(secondUser)
// console.log(thirdUser)
// console.log(otherUsers)
// console.log(Math.min(...arrayOfNumbers))
// console.log(array.join(' and '))

// const characters = ['Peter', 'Gwen', 'Norman'];
// let persons = [...characters]
// function add() {
//     let input = prompt()
//     persons = [...persons, input]
// }
// add()
// console.log(persons);

// add()
// console.log(persons);

// add()
// console.log(persons);

// add()
// console.log(persons);

// add()
// console.log(persons);

// let filteredArray = persons.filter((item) => item !== 'ff')
// persons = [filteredArray]
// console.log(persons)
// console.log(characters);
// ['Peter', 'Gwen', 'Norman', 'Stan'];
// ['Peter', 'Gwen', 'Norman', 'Stan'];
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// let deletedElement= salary.pop()
// console.log(deletedElement)

// let s = salary.flat()
// console.log(s)
// let r = s.reduce((a,b) => a * b,2)
// console.log(r)

// const myArr = [[1,2],[3,4],[5,6]];
// let a = myArr.flat()
// console.log(a)
// const newArr = []

// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr[i].length; j++) {
//           newArr.push(myArr[i][j])
//     }
// }

// console.log(newArr)

// let num = 200
// console.log(num.toString(2))

// const numbers = [18, 9, 16, 12, 29];
// numbers.reverse()
// console.log(numbers)
// console.log(numbers.find((item) => item === 18))
// console.log(numbers.findIndex((item) => item === 18))
// console.log(numbers.findLast((item) => item === 18))
// console.log(numbers.findLastIndex((item) => item === 18))
// console.log(numbers.every((item) => item > 0))
// console.log(numbers.some((item) => item > 29))

// let array = [1,2,1,2,3,3,3,3,4,5,6]

// array = new Set(array)
// let newarr = []

// array.forEach((item) => {
//     console.log(item)
//     newarr.push(item)
// })


// let r = Array.from(array)
// console.log(r)




// let arr = [3,1,5,4,2]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {


//     }
// }

// let obj = {
//     userArray: [{
//         usersParametrs: {
//             developer: 'JS',
//             status: 'junior',
//             obj: {
//                 name: 'Sam'
//             }
//         }
//     }, 2, 3, 4, 5, 6],
//     usersParametrs: {
//         developer: 'JS',
//         status: 'junior',
//         obj: {
//             name: 'Sam'
//         }
//     }
// }

// let goods = []

// for (let index = 1; index <= 30; index++) {
//     goods.push(
//         {
//             goodsName: `Element${index}`,
//             description: `Decription${index}`,
//             price: parseInt(`${Math.floor(Math.random() * goods.length + 1)}0`)
//         }     
//     )
// }

// console.log(goods)

// while (true) {
//     let input = prompt(
//         `For read all goods write - READ
//     For delete goods write - DELETE
//     For CHANGE goods write - CHANGE
//     For ADD goods write - ADD
//     For SORTING goods write - SORT
//     For STOP write - STOP
//     `
//     )

//     if (input === 'STOP') {
//         break
//     } else if (input === 'DELETE') {
//         let deletedElement = prompt('Write name of element tha you want delete')
//         let detectedElement = goods.findIndex((item) => item.goodsName === deletedElement)
//         console.log(detectedElement)
//         goods.splice(detectedElement, 1)
//         console.log(goods)
//     } else if (input === 'CHANGE') {
//         let changedElement = prompt('Write name of element tha you want change')
//         let detectedElement = goods.findIndex((item) => item.goodsName === changedElement)
//         let changedItem = prompt('Write information of element tha you want change')
//         if (changedItem === 'price') {
//             let price = prompt('Write price of element tha you want change')
//             goods[detectedElement].price = parseInt(price)
//             console.log(goods)
//         } else if (changedItem === 'description') {
//             let description = prompt('Write description of element that you want change')
//             goods[detectedElement].description = description
//             console.log(goods)
//         } else {
//             console.log('wrong')
//         }
//     } else if (input === 'ADD') {
//         let addedElement = prompt('Write information of element that you want add Example "name descriptiopn price"').split(' ')
//         // let include
//         let el = goods.some((item) => item.goodsName === addedElement[0])
//         // for (let index = 0; index < goods.length; index++) {

//         //     if (goods[index][0] === addedElement[0]) {
//         //         include = false
//         //         break
//         //     }
//         //     if (goods[index][0] !== addedElement[0]) {
//         //         include = true
//         //     }
//         // }

//         if (el === false) {
//             goods.push({ goodsName: addedElement[0], description: addedElement[1], price: addedElement[2] })
//         } else {
//             alert('array has this element')
//         }
//         console.log(goods)
//     } else if (input === 'READ') {
//         goods.forEach((item) => {
//             console.log(item.goodsName, item.description, item.price)
//         })
//     } else if (input === 'SORT') {
//         let direction = prompt('Write how do you want sort array: encrease or decrease')
//         let sortedArray
//         if (direction === 'encrease') {
//             sortedArray = goods.toSorted((a, b) => a.price - b.price)
//         } else if (direction === 'decrease') {
//             sortedArray = goods.toSorted((a, b) => b.price - a.price)
//         }
//         sortedArray.forEach((item) => {
//             console.log(item.goodsName, item.description, item.price)
//         })
//     }
// }

// let arr = [

// ]

// for (let index = 1; index <= 30; index++) {
//     arr.push({ 'goods name': `Element${index}`,
//     description: `Decription${index}`,
//     'price': parseInt(`${Math.floor(Math.random() * arr.length + 1)}0`),
//     'year': parseInt(`${Math.floor(Math.random() * 2000)}`) })
// }


// let input = prompt()
 
// arr.forEach((item) => {
//     console.log(item["goods name"], item['description'], item['price'], item['year'])
// })
// let obj = {
//     userName: 'Ramin',
//     'profession': obj.userName,
//     showName:() => {
//         console.log(obj.userName)
//     }
// }

// console.log(obj)
// obj.showName()

// function n(a,b,c,d) {
//     for (let index = 0; index < arguments.length; index++) {
//         const element = arguments[index];
//         console.log(element)
//     }
// }

// n(1,2,3,4)

// const s = (a,b,c,d) => {
//     console.log(arguments[0],arguments[1],arguments[2],arguments[3])
// }

// s(1,2,3,4)
// let base = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'

// let password = 'svdfdf'
// main:for (let i = 0; true; i++) {
//     let text = ''
//     inner:for (let j = 0; j < password.length; j++) {
//         text += base[Math.floor(Math.random() * base.length)]
//         console.log(text)
//         if(text === password){
//             console.log(text + 'detected')
//             break main
//         }
//     }    
// }

// let timer = setInterval(() => {
//     let text = ''
//     for (let j = 0; j < password.length; j++) {
//         console.log(j)
//         text += base[Math.floor(Math.random() * base.length)]
//         console.log(text)
//         if(text === password){
//             console.log(text + 'detected')
//             clearInterval(timer)
//         }
//     }   
// },100)


// console.log(as(() => 1))

// console.log(Object)

// let obj = {
//     'Adress':'Baku',
//     'User Name':'Sam'
// }

// let obj2 = {...obj}
// console.log(obj)
// console.log(obj2)

// let obj3 = Object.create(obj)
// console.log(obj3)
// console.log(obj3.adress)
// let objKeys = Object.entries(obj)
// console.log(objKeys)
// let text = ''
// objKeys.forEach((item) => {
//     text += `${item[0]} ${item[1]}\n`
// })
// console.log(text)

// const myFunc = () => {
// console.log('hello')
// }
// myFunc()

// let b= 123
// console.log(b.toString(16))
// let arr = [1,2,3,4]
// let a = [...arr]
// let [one,two, ...rest] = arr
// console.log(one, two, rest)

// console.log(!true)
// console.log(!!true)
// let b = Boolean(prompt())
// if(!!b){

// }

// console.log(typeof NaN)
// function names(value) {
//     for (let index = 0; index < value.length; index++) {
//         const element = value[index];
//         if(typeof +element === 'string' || typeof +element === 'NaN'){
//             console.log(element)
//              return true
//         }else if(typeof +element === 'number'){
//             console.log(element)
//            return false
//         }
//     }
// }
// console.log(names('12a'))
// let i = 0

// function myFunc(){
//         i++
//         console.log('hello')
//         if(i < 15){
//             myFunc()
//         }
// }
// myFunc()

// console.log(muFunc())
// console.log(muFunc())
// console.log(muFunc())
// console.log(muFunc())
// console.log(muFunc())

// console.log(0.1 + 0.2)

// function n(){
//     console.log(arguments)
//          console.log(arguments[0],arguments[1],arguments[2],arguments[3])
// }

// n(1,2,3,4)

// class Car{
//     constructor(car, model, color){
//         this.car = car
//         this.wheels = 4
//         this.sitingPlace = 4
//         this.model = model
//         this.color = color
//     }

//    set updateModel(newModel){
//          this.model = newModel
//     }
//     get getModel(){
//        return this.model
//    }
// }

// let car = new Car('BMW','x6', 'black')
// car.updateModel = 'Mitsubishi'
// console.log(car.getModel)
// console.log(car)
// let car2 = new Car('BMW','x5', 'black')
// console.log(car2)
// let car3 = new Car('MERS','e class', 'black')
// car3.sitingPlace = 2
// console.log(car3)


class Person{
    constructor(){
        this.company = 'Samsung'
        this.departmnet = 'IT'
    }
}

class HelpDesk extends Person{
    constructor(company,departmnet){
        super(company,departmnet)
        this.company = company
        this.departmnet = departmnet
        this.level = 'junor'
    }

    saysHello(){
        console.log('I am helpdesk of Samsung company')
    }
}

class Admin extends Person{
    constructor(company,departmnet){
        super(company,departmnet)
        this.company = company
        this.departmnet = departmnet
        this.level = 'junor'

    }

    saysHello(){
        console.log('I am admin of Samsung company')
    }
}

let h = new HelpDesk('Apple','Helpdesk')
let a = new Admin('Apple','Admin')
console.log(h)
console.log(a)
h.saysHello()
a.saysHello()

class Person {
    constructor(name, surname, age, gender) {
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
    }

    rename(newName){
        this.name = newName
    }
}

class HelpDesk extends Person {
    constructor(name, surname, age, gender, id, role) {
        super(name, surname, age, gender)
        this.id = id
        this.role = role
    }

}

class Admin extends Person {
    constructor(name, surname, age, gender, level) {
        super(name, surname, age, gender)
        this.level = level
    }

}

let h = new HelpDesk('Sam', 'Tarly', 27, 'male','heldesk', 2)
let a = new Admin('Sam', 'Tarly', 27, 'male','senior')
h.rename('Tom')
console.log(h)
console.log(a)

// function f(arg) {
//     console.log(arg);
//     console.log(this);
// }

// f('abc'); // abc, [object Window]

// f.call('123', 'abc'); // abc, 123

// function f() {
//     console.log(this);
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// f(1, 2, 3); // [object Window], 1, 2, 3 

// f.apply('abc', [1, 2, 3, 4]); // abc, 1, 2, 3, 4

// function f() { 
//     console.log(this); 
//     } 
//     let wrapped = f.bind('123'); 
//     f(); // [object Window] 
//     wrapped(); // abc

// function add(a, b) {
//     return a + b;
// }
// let addOne = add.bind(null, 1);
// alert(add(1, 2)); // 3 

// alert(addOne(2)); // 3
