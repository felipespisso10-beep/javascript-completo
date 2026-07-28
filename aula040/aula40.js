const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML1","HTML2","HTML3","HTML4","HTML5","HTML6",]

cursos.map((el)=> {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("Id","c7")
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})

 