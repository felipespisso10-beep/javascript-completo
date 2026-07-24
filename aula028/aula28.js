const el=document.getElementsByTagName("div")
const val=Array.prototype.map.call(Element,({innerHTML})=>innerHTML)
console.log(val)






// let el=document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML='CPF Cursos'
// })






// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'Raect']
// cursos.map((el,i,a)=>{
//     console.log('Curos; ' + el + '- posição do curso:' + i)
// })