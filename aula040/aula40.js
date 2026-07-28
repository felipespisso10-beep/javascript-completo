const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

const novoElemento=document.createElement("div")
novoElemento.setAttribute("Id","c7")
novoElemento.setAttribute("class","curso c1")
novoElemento.innerHTML="Reactnative"

caixa1.appendChild(novoElemento)
