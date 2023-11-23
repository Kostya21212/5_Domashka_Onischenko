const userEntersAction = prompt ('Введите действие которое хотите сделать ( - , + ,* , / )');
const numberOne = +prompt ('Введите первое число');
const numberTwo = +prompt ('Введите второе число');
 const add = `+`;
// const mult = `*`;
// const sub = `-`
// const div = `/`
// const action = add || mult || sub || div;
let resultAdd = numberOne + numberTwo
let resultDiv = numberOne / numberTwo
let resultSub = numberOne - numberTwo
let resultMult = numberOne * numberTwo

switch (userEntersAction){
    case '*':
        alert(`${numberOne} ${userEntersAction} ${numberTwo} = ${resultMult}`
        )
        break
    case '/':
        alert(`${numberOne} ${userEntersAction} ${numberTwo} = ${resultDiv}`)
        break
    case '-':
        alert(`${numberOne} ${userEntersAction} ${numberTwo} = ${resultSub}`
        )
        break
    case '+':
        alert(`${numberOne} ${userEntersAction} ${numberTwo} = ${resultAdd}`)
        break
}
console.log(`${userEntersAction}`)