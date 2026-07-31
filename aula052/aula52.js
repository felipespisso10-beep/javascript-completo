const caixa=document.querySelector(#caixa)

let cursos=["html", "css", "javascript"]

cursos.push("C++")
cursos.unshift("Python")
cursos.shift()


console.log(cursos[0])

cursos.map((el)=>{
    let p=document.createAttribute("p")
    p.innerHTML=el
    caixa.appendChild(p)
})