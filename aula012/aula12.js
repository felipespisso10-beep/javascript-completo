// let n1 = [10,20,30]
// let n2 = [11,22,33,44,55]
// let n3 = 

// const jogador1 = {nome:"Bruno", energia: 100, vidas: 3}
// const jogador2 = {nome:"Bruce", energia: 100, vidas: 5}
// const jogador3 = {...jogador1,...jogador2}

// console.log('n1: ' + n1)
// console.log('n2: ' + n2)
// console.log(jogador3)

const objs1 = document.getElementsByName("div")
const objs2 = [...document.getElementsByName("div")]

objs1.forEach(elemente => {
    console.log(elemente)
})

console.log(objs1)
console.log(objs2)