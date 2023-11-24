const userEntersAction = prompt ('Введите действие которое хотите сделать ( - , + ,* , / )');
const numberOne = +prompt ('Введите первое число');
const numberTwo = +prompt ('Введите второе число');
const mult = `*`
 
// const action = add || mult || sub || div;
let resultAdd = numberOne + numberTwo
let resultDiv = numberOne / numberTwo
let resultSub = numberOne - numberTwo
let resultMult = numberOne * numberTwo

switch (userEntersAction){
    case'mult':
        alert(`${numberOne} * ${numberTwo} = ${resultMult}`
        )
        break
    case 'div':
        alert(`${numberOne} / ${numberTwo} = ${resultDiv}`)
        break
    case 'sub':
        alert(`${numberOne} - ${numberTwo} = ${resultSub}`
        )
        break
    case 'add':
        alert(`${numberOne} + ${numberTwo} = ${resultAdd}`)
        break
}
console.log(`${userEntersAction}`)